import Vue from 'vue'
import Vuex from 'vuex'
import defau from './defau.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name : '张三'
  },
  mutations: {
    increment(state){
      return state
    }
  },
  actions: {
  },
  getters:{
    dontodos:(state)=>{
      return state.name='李四'
    }
  },
  modules: {
    defau,
  }
})
