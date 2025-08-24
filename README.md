# vite-vue3-persian-datetime-picker

[![npm version](https://badge.fury.io/js/vite-vue3-persian-datetime-picker.svg)](https://badge.fury.io/js/vite-vue3-persian-datetime-picker)

> A vue plugin to select jalali date and time

This package is a fork of [vue3-persian-datetime-picker](https://github.com/talkhabi/vue3-persian-datetime-picker) which is migrated to use vite as build tool instead of webpack.

See documentation and demo at [vue-persian-datetime-picker](https://talkhabi.github.io/vue-persian-datetime-picker).

If you are using vuejs 2, please refer to [this repository](https://talkhabi.github.io/vue-persian-datetime-picker).

## Installation

### npm
```bash
npm install vite-vue3-persian-datetime-picker --save
```


### Usage
```javascript
// main.js

import { createApp } from 'vue'
import Vue3PersianDatetimePicker from 'vite-vue3-persian-datetime-picker'
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
  import DatePicker from 'vite-vue3-persian-datetime-picker'
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

import Vue3PersianDatetimePicker from 'vite-vue3-persian-datetime-picker'
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
