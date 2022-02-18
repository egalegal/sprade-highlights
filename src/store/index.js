
import { createStore } from 'vuex'

let timer

export default createStore({
  state: {
    curTime: 1200,
    date: "",
    homeTeam: "",
    awayTeam: "",
    third: "",
    isActive: false,
  },

  mutations: {
    setcurTime(state, curTime){
      state.curTime = curTime;
    },
    setDate(state, date){
      state.date = date;
    },
    setHomeTeam(state, homeTeam){
      state.homeTeam = homeTeam;
    },
    setAwayTeam(state, awayTeam){
      state.awayTeam = awayTeam;
    },
    setThird(state, third){
      state.third = third;
    },
  },

  actions: {
    countDown: ({ commit, dispatch, state}) => {
      timer = setInterval(
        () => {
          if(state.curTime >= 1) commit('setcurTime', state.curTime - 1)
          else{dispatch('stopCountDown'); state.isActive = false;}
        }, 1000
        )
    },

    stopCountDown: () => clearInterval(timer)
  },

  watch: {
    curTime(state) {
      console.log("Timer stopped" + state.curTime)
    }
  }
})
