import { createStore } from 'vuex'

export default createStore({
  state: {
    curTime: 1200,
    curClock: "",
  },
  mutations: {
    countDown(state){
      state.curTime--;
    },
    convertTime(state){
      const Minute = state.curTime/60;
      const Second = state.curTime % 60;
      const curClock = Minute + ":" + Second;
    },
  },
  actions: {
    convertTime () {
      this.commit('convertTime')
    }
  }
})
