import { createStore } from 'vuex'

export default createStore({
  state: {
    countitem:'',
    allcount:0,
    countdata:0,
  },
  getters: {
    getcount : state => state.countitem,
    receivecount : state =>state.countdata,
  },
  mutations: {
  },
  actions: {
    setcount : ({state},value) =>state.countitem = value,
    setcountdata :({state},value) => state.countdata = value,
  },
  modules: {
  }
})
