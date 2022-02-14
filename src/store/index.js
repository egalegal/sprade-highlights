
import { createStore } from 'vuex'

let timer

export default createStore({
  state: {
    curTime: 1200,
    curClock: "20:00",
    date: "",
    homeTeam: "",
    awayTeam: "",
    third: "",
  },
  mutations: {
    setcurTime(state, curTime){
      state.curTime = curTime;
    },
    convertTime(state, curClock){
      state.curClock = curClock;
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
    convertTime ({commit, state}) {
      const Minute = Math.floor(state.curTime/60);
      var Second = state.curTime % 60;
      if(Second == 0) Second = Second + "0";
      const curClock = Minute + ":" + Second;
      commit('convertTime', curClock);
    },

    countDown ({commit, dispatch, state}) {
      timer = setInterval(() => {
        commit('setcurTime', state.curTime-1);
        dispatch('convertTime');
      }, 1000)
    },

    stopCountDown: () => {
      clearInterval(timer)
    }
  }
})
