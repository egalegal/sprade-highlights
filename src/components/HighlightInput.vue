<template>
    <div class="highlightinput">
        <button class="big">Heim</button>
        <button class="big">Gast</button>
        <input type="time" value="00:00" />
        <button class="big">Tor Heim</button>
        <button class="big">Tor Gast</button>
        <input type="text" placeholder="Bemerkungen" />
        <button class="send">Eintragen</button>
        <button class="big" @click="toggle" v-bind:class="{ active: isActive }">Timer {{start}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        start: "Stop",
        isActive: false,
        }
    },
    methods: {
        toggle() {
            this.isActive =! this.isActive;
            start = this.isActive ? "Start" : "Stop";
        }
    }
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
    background-color: rgb(250, 93, 125);
    animation: 1s infinite alternate ease-out breathing-color--dark;
}

@keyframes breathing-color--dark    {
    from {
        background-color: rgb(250, 93, 125);
        }
    to {
        background-color: #fff;
        }
}
</style>