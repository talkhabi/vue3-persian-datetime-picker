# vue3-persian-datetime-picker

[![npm version](https://badge.fury.io/js/vue3-persian-datetime-picker.svg)](https://www.npmjs.com/package/vue3-persian-datetime-picker)

> A vue plugin to select jalali date and time

See documentation and demo at [vue-persian-datetime-picker](https://talkhabi.github.io/vue-persian-datetime-picker).

If you are using vuejs 2, please refer to [this repository](https://talkhabi.github.io/vue-persian-datetime-picker).

## Installation
### browser
```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/moment"></script>
<script src="https://cdn.jsdelivr.net/npm/moment-jalaali@0.9.4/build/moment-jalaali.js"></script>
<script src="/dist/vue3-persian-datetime-picker.umd.min.js"></script>
<div id="app">
  <date-picker v-model="date"></date-picker>
</div>
<script>
  Vue.createApp({
    data: function() {
      return {
        date: '1400/01/01'
      }
    },
    components: {
      DatePicker: Vue3PersianDatetimePicker
    }
  }).mount('#app')
</script>
```

### npm
```bash
npm install vue3-persian-datetime-picker --save
```

Configuration for moment to ignore loading locales:
```javascript
// vue.config.js:
module.exports = {
  //..
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },
  //...
}
```

vitejs configuration:
```javascript
// vite.config.js
// ...
export default defineConfig({
  // ...
  resolve: {
    mainFields: [
      'browser',
      'module',
      'main',
      'jsnext:main',
      'jsnext'
    ]
  }
})
```


### Usage
```javascript
// main.js

import { createApp } from 'vue'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
const app = createApp({})
app.component('DatePicker', Vue3PersianDatetimePicker)
app.mount('#app')
```
Or in component
```html
<template>
  <date-picker v-model="date"></date-picker>
</template>
 
<script>
  import DatePicker from 'vue3-persian-datetime-picker'
  export default {
    data(){
      return {
        date: ''
      }
    },
    components: { DatePicker }
  }
</script>
```


### You can also set default values: 
```javascript
// main.js

import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
const app = createApp({})
app.use(Vue3PersianDatetimePicker, {
  name: 'CustomDatePicker',
  props: {
    format: 'YYYY-MM-DD HH:mm',
    displayFormat: 'jYYYY-jMM-jDD',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: false,
    //...
    //... And whatever you want to set as default.
    //...
  }
})
```
Then use in component
```html
<custom-date-picker v-model="date"></custom-date-picker>
```

### [Click to see full documentation and demo](https://talkhabi.github.io/vue-persian-datetime-picker)

## Built With
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [moment-jalaali](https://github.com/jalaali/moment-jalaali) - A Jalaali (Jalali, Persian, Khorshidi, Shamsi) calendar system plugin for moment.js.


## License

This project is licensed under the MIT License


## Change log

### 1.2.2 (2022-02-10)
 * Fixed: "value" is no longer needed.

### 1.2.1 (2022-02-09)
 * Fixed: [Moment jalali localeData is not a function](https://github.com/talkhabi/vue3-persian-datetime-picker/pull/5)
 * Fixed: [Watch model value](https://github.com/talkhabi/vue3-persian-datetime-picker/pull/8)

### 1.2.0 (2021-11-04)
 * Feat: Added support for display format when using [`custom-input`](https://talkhabi.github.io/vue-persian-datetime-picker/guide/custom-input.html)
 * Fixed: [Using jumpMinute and roundMinute together](https://github.com/talkhabi/vue-persian-datetime-picker/issues/182)
 * Fixed: [Typescript declaration](https://github.com/talkhabi/vue3-persian-datetime-picker/issues/4)

### 1.1.0 (2021-10-01)
 * Feat: [Added simple-mode](https://talkhabi.github.io/vue-persian-datetime-picker/#/simple-mode)
 * Feat: [Added `input-attrs`](https://github.com/talkhabi/vue-persian-datetime-picker/issues/170)
 * Feat: [Added `@next-month` and `@prev-month` events](https://github.com/talkhabi/vue-persian-datetime-picker/issues/176)
 * Feat: Added `@year-change` and `@month-change` events
 * Fix: [Mouse wheel in Firefox](https://github.com/talkhabi/vue-persian-datetime-picker/issues/174)
 * Fix: Prevent selected dates from being reset

### 1.0.0 (2021-08-14)
  * Migrated to Vue3
