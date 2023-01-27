import Vue from "vue";

import moment from 'moment'
Vue.prototype.$returnDate = (value) => {
  return moment(value).startOf("hour").fromNow();
};
