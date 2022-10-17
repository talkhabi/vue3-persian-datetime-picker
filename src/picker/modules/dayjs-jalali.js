import * as C from 'dayjs/esm/constant'
import { toJalaali, toGregorian } from 'jalaali-js'

export default function dayjsJalali(_option, Dayjs, dayjs) {
  if (dayjs.$C) {
    // Jalali plugin is already registered in Dayjs.
    return
  }
  dayjs.$C = 'gregory'

  const proto = Dayjs.prototype
  const Utils = proto.$utils()

  const oldW = Utils.w
  Utils.w = function(date, instance) {
    const res = oldW(date, instance)
    if (instance.$C === 'jalali') {
      res.$C = 'jalali'
      res.init()
    }
    return res
  }

  dayjs.calendar = function(calendar) {
    dayjs.$C = calendar
    return dayjs
  }

  proto.calendar = function(calendar) {
    if (!calendar) {
      return this.$C
    }
    const that = this.clone()
    that.$C = calendar
    that.init()
    return that
  }

  function convertJalaliDateStringToGregory(date) {
    if (typeof date === 'string' && !/Z$/i.test(date)) {
      // REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/
      const d = date.match(C.REGEX_PARSE)
      if (!d) {
        return date
      }
      const { gy, gm, gd } = toGregorian(
        parseInt(d[1], 10),
        parseInt(d[2], 10),
        parseInt(d[3], 10) || 1
      )
      d[1] = gy
      d[2] = gm
      d[3] = gd
      return date.replace(
        /^(\d{4})-?(\d{1,2})-?(\d{0,2})/,
        d[1] + '-' + d[2] + '-' + d[3]
      )
    }
    return date
  }

  const oldParse = proto.parse
  proto.parse = function(cfg) {
    this.$C = cfg.calendar || this.$C || dayjs.$C
    if (cfg.jalali) {
      cfg.date = convertJalaliDateStringToGregory(cfg.date)
    }
    oldParse.call(this, cfg)
  }

  const oldInit = proto.init
  proto.init = function() {
    oldInit.call(this)
    if (this.$C === 'jalali') {
      if (!isNaN(this.$d)) {
        const { jy, jm, jd } = toJalaali(this.$y, this.$M + 1, this.$D)
        this.$jy = jy
        this.$jM = jm - 1
        this.$jD = jd
      } else {
        this.$jy = NaN
        this.$jM = NaN
        this.$jD = NaN
      }
    } else {
      delete this.$jy
      delete this.$jM
      delete this.$jD
    }
  }

  const old$g = proto.$g
  proto.$g = function(input, get, set) {
    if (this.$C !== 'jalali') {
      return old$g.call(this, input, get, set)
    }
    if (Utils.u(input)) {
      if (get === '$y') {
        get = '$jy'
      }
      if (get === '$M') {
        get = '$jM'
      }
      if (get === '$D') {
        get = '$jD'
      }
      return this[get]
    }
    return this.set(set, input)
  }

  const oldStartOf = proto.startOf
  proto.startOf = function(units, startOf) {
    if (this.$C !== 'jalali') {
      return oldStartOf.call(this, units, startOf)
    }
    const isStartOf = !Utils.u(startOf) ? startOf : true
    const unit = Utils.p(units)
    const instanceFactory = (d, m = this.$jM, y = this.$jy) => {
      const { gy, gm, gd } = toGregorian(y, m + 1, d)
      const ins = Utils.w(
        this.$u ? Date.UTC(gy, gm - 1, gd) : new Date(gy, gm - 1, gd),
        this
      )
      return (isStartOf ? ins : ins.endOf(C.D)).$set('hour', 1) // prevent daylight saving issue in safari
    }
    const { $W, $jy, $jM, $jD } = this
    switch (unit) {
      case C.Y:
        return isStartOf
          ? instanceFactory(1, 0)
          : instanceFactory(0, 0, $jy + 1)
      case C.M:
        return isStartOf
          ? instanceFactory(1)
          : instanceFactory(
              0,
              ($jM + 1) % 12,
              $jy + parseInt(($jM + 1) / 12, 10)
            )
      case C.W: {
        const weekStart = this.$locale().weekStart || 0
        const gap = ($W < weekStart ? $W + 7 : $W) - weekStart
        return instanceFactory(isStartOf ? $jD - gap : $jD + (6 - gap))
      }
      default:
        return oldStartOf.call(this, units, startOf)
    }
  }

  const old$set = proto.$set
  proto.$set = function(string, int) {
    if (this.$C !== 'jalali') {
      return old$set.call(this, string, int)
    }
    const unit = Utils.p(string)
    let { $jy, $jM, $jD } = this
    switch (unit) {
      case C.Y:
        $jy = int
        break
      case C.M:
        $jM = int
        break
      case C.DATE:
      case C.D:
        $jD = int
        break
      default:
        return old$set.call(this, string, int)
    }
    const { gy, gm, gd } = toGregorian($jy, $jM + 1, $jD)
    this.$d.setFullYear(gy)
    this.$d.setMonth(gm - 1)
    this.$d.setDate(gd)
    this.init()
    return this
  }

  const oldAdd = proto.add
  proto.add = function(number, units) {
    if (this.$C !== 'jalali') {
      return oldAdd.call(this, number, units)
    }
    number = Number(number) // eslint-disable-line no-param-reassign
    // const unit =
    //     units && (units.length === 1 || units === 'ms')
    //         ? units
    //         : Utils.p(units);
    const unit = Utils.p(units)
    if (['M', C.M].includes(unit)) {
      const n = this.$jM + number
      const y = n < 0 ? -Math.ceil(-n / 12) : parseInt(n / 12, 10)
      const d = this.$jD
      const x = this.set(C.D, 1)
        .add(y, C.Y)
        .set(C.M, n - y * 12)
      return x.set(C.D, Math.min(d, x.daysInMonth()))
    }
    if (['y', C.Y].includes(unit)) {
      const date = this.set(C.DATE, 1).set(C.Y, this.$jy + number)
      return date.set(C.DATE, Math.min(this.$jD, date.daysInMonth()))
    }
    if (['d', C.D].includes(unit)) {
      const d = new Date(this.$d)
      d.setDate(d.getDate() + number)
      const date = this.clone()
      date.$d = d
      date.init()
      return date
    }
    return oldAdd.call(this, number, units)
  }

  const oldFormat = proto.format
  proto.format = function(formatStr) {
    if (this.$C !== 'jalali') {
      return oldFormat.call(this, formatStr)
    }
    const str = formatStr || C.FORMAT_DEFAULT
    const locale = this.$locale()
    const { $jM } = this
    const { name } = locale
    const months = {
      en:
        'Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand',
      fa: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'
    }[name].split('_')
    const getShort = (arr, index, full, length) =>
      (arr && (arr[index] || arr(this, str))) || full[index].substr(0, length)

    const matches = {
      YY: String(this.$jy).slice(-2),
      YYYY: this.$jy,
      M: $jM + 1,
      MM: Utils.s($jM + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $jM, months, 3),
      MMMM: getShort(months, $jM),
      D: this.$jD,
      DD: Utils.s(this.$jD, 2, '0')
    }

    return str.replace(
      C.REGEX_FORMAT,
      (match, $1) => $1 || matches[match] || oldFormat.call(this, match)
    )
  }

  const oldDaysInMonth = proto.daysInMonth
  proto.daysInMonth = function() {
    if (this.$C !== 'jalali') {
      return oldDaysInMonth.call(this)
    }
    return this.endOf(C.M).$jD
  }

  const oldToArray = proto.toArray
  if (oldToArray) {
    proto.toArray = function() {
      if (this.$C !== 'jalali') {
        return oldToArray.call(this)
      }
      return [this.$jy, this.$jM, this.$jD, this.$H, this.$m, this.$s, this.$ms]
    }
  }
}
