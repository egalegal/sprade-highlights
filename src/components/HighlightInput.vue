<template>
    <section class="highlightinput">
        <div class="radiobuttons">
            <input type="radio" id="smallchance" name="chance" value="+" checked><label for="smallchance">+</label>
            <input type="radio" id="midchance" name="chance" value="++"><label for="midchance">++</label>
            <input type="radio" id="bigchance" name="chance" value="+++"><label for="bigchance">+++</label>
        </div>
        <div></div>
        <button class="big" @click="highlightHome()">Heim</button>
        <button class="big" @click="highlightAway()">Gast</button>
        <input type="time" :value="curClock" @blur="setCurTime()" name="test" />
        <button class="big" @click="goalHome()">Tor Heim</button>
        <button class="big" @click="goalAway()">Tor Gast</button>
        <!-- <input type="text" placeholder="Bemerkungen" /> -->
        <!-- <button class="send">Eintragen</button> -->
        <button class="big send" v-if="!store.state.isActive" @click="startCountDown()">Timer Start</button>
        <button class="big active" v-else @click="stopCountDown()">Timer Stop</button>
    </section>
</template>

<script>
/* eslint-disable */
import { useStore } from "vuex"
import { computed } from "vue"

export default {
    setup() {
        const store = useStore()

        const secondsToMinutes = (s) => {
            
            if(Math.floor(s / 60) < 10) {
                s = '0'+Math.floor(s / 60) + ':' + ('0' + Math.floor(s % 60)).slice(-2);
            } 
            else {s = Math.floor(s / 60)+ ':' + ('0' + Math.floor(s % 60)).slice(-2)}
            store.commit('setcurClock', s);
            return s;
        }

        const curClock = computed(() => secondsToMinutes(store.state.curTime))

        const setCurTime = () => { //converts time input into seconds and commits to store
            var inputTime = document.querySelector("input[name=test]").value;
            var MinToSec = inputTime.split(":");
            var curTime = parseInt(MinToSec[0]*60) + parseInt(MinToSec[1]);
            store.commit('setcurTime', curTime);
        }

        const startCountDown = () => {
            store.state.isActive = true
            store.dispatch('countDown')
        }

        const stopCountDown = () => {
            store.state.isActive = false
            store.dispatch('stopCountDown')
        }

        const highlightHome = () => {
            store.dispatch('highlightAdd', {team: "Home", chance: document.querySelector('input[name=chance]:checked').value})
        }
        const highlightAway = () => {
            store.dispatch('highlightAdd', {team: "Away", chance: document.querySelector('input[name=chance]:checked').value})
        }
        const goalHome = () => {
            stopCountDown();
            store.state.homeGoals++;
            store.dispatch('highlightAdd', {team: ""})
        }
        const goalAway = () => {
            stopCountDown();
            store.state.awayGoals++;
            store.dispatch('highlightAdd', {team: ""})
        }

        return {
            store,
            curClock,
            startCountDown,
            stopCountDown,
            setCurTime,
            highlightHome,
            highlightAway,
            goalHome,
            goalAway,
        }
    },
}

</script>

<style scoped>
.highlightinput    {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    min-height: 100vh;
    background-color: #fff;
    scroll-snap-align: start;
}

button, .radiobuttons label  {
    font-family: "Open Sans";
    border-radius: 5px !important;
    border: 1px solid #007EB2;
    padding: 5px;
    text-align: center;
    margin: 5px;
    font-size: 1.2em;
    background-color: #fff;
    cursor: pointer;
}

.big {
    width: 90vw;
    min-height: 10vh;
}

.send  {
    background-color: #007EB2;
    color: #fff;
    width: 90vw;
    text-align: center;
    min-height: 10vh;
}

input[type="time"]  {
    width: 90vw;
    text-align: center;
    min-height: 10vh;
    border-radius: 5px !important;
}
input[type="text"]  {
    width: 90vw;
    text-align: center;
    min-height: 10vh;
    border-radius: 5px !important;
}

.active {
    background-color: #007EB2;
    animation: 1s infinite alternate ease-out breathing-color--dark;
}

@keyframes breathing-color--dark    {
    from {
        background-color: #007EB2;
        }
    to {
        background-color: #fff;
        }
}

.radiobuttons   {
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 90vw;
}

input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
}

.radiobuttons label {
    display: flex;
    width: 33%;
    height: 9vh;
    align-items: center;
    justify-content: center;
}

input[type="radio"]:checked + label  {
    background-color: #007EB2;
    color: #fff;
}
</style>
