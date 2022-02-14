<template>
    <section class="highlightinput">
        <button class="big">Heim</button>
        <button class="big">Gast</button>
        <input type="time" :value = "curClock" />
        <button class="big">Tor Heim</button>
        <button class="big">Tor Gast</button>
        <input type="text" placeholder="Bemerkungen" />
        <button class="send">Eintragen</button>
        <button class="big" v-if="!state.isActive" @click="startCountDown()">Timer Start</button>
        <button class="big active" v-else @click="stopCountDown()">Timer Stop</button>
    </section>
</template>

<script>
/* eslint-disable */
import { useStore } from "vuex"
import { computed, reactive } from "vue"

export default {
    setup() {

        const store = useStore();
        const state = reactive({
            isActive: false
        });
        const curClock = computed(() => store.state.curClock);

        const startCountDown = () => {
            state.isActive = true
            store.dispatch('countDown')
        };

        const stopCountDown = () => {
            state.isActive = false
            store.dispatch('stopCountDown')
        };

        return { store, curClock, startCountDown, stopCountDown, state }
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
