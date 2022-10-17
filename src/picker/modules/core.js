/*global getYear*/
/*eslint no-undef: ["error", { "typeof": true }] */

import dayjs from 'dayjs'
import utils from './utils'
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'
import calendar from 'dayjs/plugin/calendar'
import utc from 'dayjs/plugin/utc'
import dayjsJalali from './dayjs-jalali'

import 'dayjs/locale/fa'

dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.extend(localeData)
dayjs.extend(calendar)
dayjs.extend(utc)
dayjs.extend(dayjsJalali)
dayjs.updateLocale('en', {
  weekdaysMin: 'S_M_T_W_T_F_S'.split('_')
})

//=====================================
//           CONFIG
//=====================================
const localesConfig = {
  fa: {
    calendar: 'jalali',
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'شمسی',
      submit: 'تایید',
      cancel: 'انصراف',
      now: 'اکنون',
      nextMonth: 'ماه بعد',
      prevMonth: 'ماه قبل',
      year: 'سال',
      month: 'ماه',
      day: 'روز'
    }
  },
  en: {
    calendar: 'gregorian',
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'میلادی',
      submit: 'Select',
      cancel: 'Cancel',
      now: 'Now',
      nextMonth: 'Next month',
      prevMonth: 'Previous month',
      year: 'Year',
      month: 'Month',
      day: 'Day'
    }
  }
}

const Core = function(defaultLocaleName, defaultOptions) {
  'use strict'

  const Instance = {
    dayjs: dayjs,
    dayjsBase: dayjs,
    locale: { name: 'fa', config: {} },
    localesConfig: {},
    setLocalesConfig: null,
    changeLocale: null,
    getWeekArray: null,
    getYearsList: null,
    getMonthsList: null
  }

  //=====================================
  //           METHODS
  //=====================================

  Instance.changeLocale = function changeLocale(
    localeName = 'fa',
    options = {}
  ) {
    let locale = this.locale
    let calendar = localesConfig[localeName].calendar
    let config = utils.clone(localesConfig[localeName] || localesConfig.en)

    options = options[localeName] || {}
    if (!localesConfig[localeName])
      options = utils.extend(true, {}, utils.clone(localesConfig.en), options)
    locale.name = localeName
    locale.config = utils.extend(true, config, options)

    this.dayjs = function() {
      return dayjs
        .apply(null, arguments)
        .locale(locale.name)
        .calendar(calendar)
    }
  }

  Instance.setLocalesConfig = function(config) {
    let defaults = utils.clone(localesConfig)
    for (let key in config) {
      if (config.hasOwnProperty(key) && defaults[key] === undefined)
        defaults[key] = utils.extend(
          true,
          {},
          utils.clone(defaults.en),
          { lang: { label: key } },
          config[key]
        )
    }
    this.localesConfig = utils.extend(true, defaults, config)
  }

  Instance.getWeekArray = function getWeekArray(date) {
    function addWeek(weekArray, week) {
      let emptyDays = 7 - week.length

      for (let i = 0; i < emptyDays; ++i) {
        week[weekArray.length ? 'push' : 'unshift'](null)
      }

      weekArray.push(week)
    }

    date.set('hour', 12).set('minute', 0)
    let daysInMonth = date.daysInMonth()
    let day = date.clone().date(1)
    let dayArray = [day.toDate()]

    for (let i = 2; i <= daysInMonth; i++) {
      day = day.add(1, 'day')
      dayArray.push(day.toDate())
    }

    let weekArray = []
    let week = []

    dayArray.forEach(day => {
      if (week.length > 0 && day.getDay() === this.locale.config.dow) {
        addWeek(weekArray, week)
        week = []
      }

      week.push(day)

      if (dayArray.indexOf(day) === dayArray.length - 1) {
        addWeek(weekArray, week)
      }
    })

    return weekArray
  }

  Instance.getYearsList = function getYearsList(from, to, range = false, date) {
    let years = []
    if (range) {
      let year = getYear(date)
      from = year - range
      to = year + range
    }
    for (let i = from; i <= to; i++) {
      years.push(i)
    }
    return years
  }

  Instance.getMonthsList = function getMonthsList(minDate, maxDate, date) {
    let list = [],
      min = minDate ? minDate.clone().startOf('month') : -Infinity,
      max = maxDate ? maxDate.clone().endOf('month') : Infinity
    for (let i = 0; i < 12; i++) {
      let month = date.clone().month(i)
      let start = month.clone().startOf('month')

      let end = month.clone().endOf('month')

      month.disabled = start < min || end > max
      list.push(month)
    }
    return list
  }

  Instance.changeLocale(defaultLocaleName, defaultOptions)

  return Instance
}

export default Core

export { localesConfig }
