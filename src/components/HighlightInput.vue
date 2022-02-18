<template>
    <section class="highlightinput">
        <button class="big">Heim</button>
        <button class="big">Gast</button>
        <input type="time" :value="curClock" @blur="setCurTime()" name="test" />
        <button class="big">Tor Heim</button>
        <button class="big">Tor Gast</button>
        <input type="text" placeholder="Bemerkungen" />
        <button class="send">Eintragen</button>
        <button class="big" v-if="!store.state.isActive" @click="startCountDown()">Timer Start</button>
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
        };

        const stopCountDown = () => {
            store.state.isActive = false
            store.dispatch('stopCountDown')
        };

        return {
            store,
            curClock,
            startCountDown,
            stopCountDown,
            setCurTime,
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

button  {
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
</style>
