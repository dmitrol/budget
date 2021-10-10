import Vue from 'vue'
import Vuex from 'vuex'
import bill from './modules/bill'
import categories from './modules/categories'
import currency from './modules/currency'
import modal from './modules/modal'
import record from './modules/record'

Vue.use(Vuex)


export default new Vuex.Store({
  // state: {
  //   categories: [
  //     {
  //       name: 'Зарплата',
  //       type: 'Доход'
  //     },
  //     {
  //       name: 'Депозит',
  //       type: 'Доход'
  //     },
  //     {
  //       name: 'Другое',
  //       type: 'Доход'
  //     },
  //     {
  //       name: 'Еда',
  //       type: 'Расход'
  //     },
  //     {
  //       name: 'Дом',
  //       type: 'Расход'
  //     },
  //     {
  //       name: 'Машына',
  //       type: 'Расход'
  //     },
  //     {
  //       name: 'Развленения',
  //       type: 'Расход'
  //     },
  //   ]
  // },
  // getters: {
  //   getAllCategories(state) {
  //     return state.categories;
  //   }
  // },
  // mutations: {
  //   addCategory(state, category) {
  //     state.categories.push(category);
  //   }
  // },
  // actions: {
  // },
  modules: {
    bill,
    categories,
    currency,
    modal,
    record
  }
})
