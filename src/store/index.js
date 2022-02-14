
import { createStore } from 'vuex'

let timer

export default createStore({
  state: {
    curTime: 1200,
    date: "",
    homeTeam: "",
    awayTeam: "",
    third: "",
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
    countDown ({commit, state}) {
      timer = setInterval(() => commit('setcurTime', state.curTime - 1), 1000)
    },

    stopCountDown: () => clearInterval(timer)
  }
})
