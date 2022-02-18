
import { createStore } from 'vuex'

let timer

export default createStore({
  state: {
    curTime: 1200,
    curClock: "",
    date: "",
    homeTeam: "",
    awayTeam: "",
    third: "",
    isActive: false,
    homeGoals: 0,
    awayGoals: 0,
    highlights: [],
  },

  mutations: {
    setcurTime(state, curTime){
      state.curTime = curTime;
    },
    setcurClock(state, curClock){
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
    pushHighlights(state, data){
      state.highlights.push(data);
    }
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

    stopCountDown: () => clearInterval(timer),

    highlightAdd: ({commit, getters, state}, getData) => {
      const highlightLength = state.highlights.length + 1
      
      var data = {
        id: highlightLength, 
        third: state.third, 
        time: state.curClock, 
        team: getData.team, 
        goals: getters['goals'], 
        chance: getData.chance,
      };
      commit('pushHighlights', data);
      console.log("Highlight added", data);
    }
  },

  getters: {
    goals: state => state.homeGoals + ":" + state.awayGoals,
    highlights: state => state.highlights,
  }
})
