!<template>
    <section class="match-setup">
        <img src="../assets/sprade.png"/>
        <h1>Highlights</h1>
        <input name="MatchDate" type="date" @change="setDate($event)"/>
        <select name="hometeam" @change="setHomeTeam($event)"> 
            <option>Heimteam</option>
            <option>Dresdner Eislöwen</option>
            <option>Ravensburg Towerstars</option>
            <option>Löwen Frankfurt</option>
            <option>EC Bad Nauheim</option>
            <option>Eispiraten Crimmitschau</option>
            <option>EC Kassel Huskies</option>
            <option>Heilbronner Falken</option>
            <option>ESV Kaufbeuren</option>
            <option>Tölzer Löwen</option>
            <option>EHC Freiburg</option>
            <option>EV Landshut</option>
            <option>Lausitzer Füchse</option>
            <option>Bayreuth Tigers</option>
            <option>Selber Wölfe</option>
        </select>
        <select name="awayteam" @change="setAwayTeam($event)">
            <option>Auswärtsteam</option>
            <option>Dresdner Eislöwen</option>
            <option>Ravensburg Towerstars</option>
            <option>Löwen Frankfurt</option>
            <option>EC Bad Nauheim</option>
            <option>Eispiraten Crimmitschau</option>
            <option>EC Kassel Huskies</option>
            <option>Heilbronner Falken</option>
            <option>ESV Kaufbeuren</option>
            <option>Tölzer Löwen</option>
            <option>EHC Freiburg</option>
            <option>EV Landshut</option>
            <option>Lausitzer Füchse</option>
            <option>Bayreuth Tigers</option>
            <option>Selber Wölfe</option>
        </select>
        <select name="third" @change="setThird($event)">
            <option>Drittel</option>
            <option>1. Drittel</option>
            <option>2. Drittel</option>
            <option>3. Drittel</option>
            <option>Overtime</option>
            <option>Penaltyschießen</option>
            <option>Overtime I</option>
            <option>overtime II</option>
            <option>Overtime III</option>
            <option>Overtime IV</option>
            <option>Overtime V</option>
        </select>
    </section>
</template>

<script>
import { useStore } from "vuex"

export default {
    setup() {
        const store = useStore();
        const setDate = (event) => store.commit("setDate", event.target.value);
        const setHomeTeam = (event) => store.commit("setHomeTeam", event.target.value);
        const setAwayTeam = (event) => store.commit("setAwayTeam", event.target.value);
        const setThird = (event) => {
            store.commit("setThird", event.target.value);
            store.commit("setcurTime", 1200);
        }
        return { setDate, store, setHomeTeam, setAwayTeam, setThird }
    }
}
</script>

<style scoped>
.match-setup    {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Open Sans";
    min-height: 100vh;
    /* margin-top: 0px; */
    /* z-index: 10; */
    background-color: #fff;
    scroll-snap-align: start;
}

img {
    margin-top: 30%;
    width: 50vw;
}
h1 {
    text-align: center;
    color: #007EB2;
    font-size: 1.5em;
    margin-bottom: 2em;
}
input   {
    font-family: "Open Sans";
    width: 250px;
    height: 50px;
    border-radius: 5px !important;
    border: 1px solid #007EB2;
    padding: 5px;
    text-align: center;
    margin: 5px;
    font-size: 1.2em;
    background-color: #fff;
}

select {
    font-family: "Open Sans";
    width: 250px;
    height: 50px;
    border-radius: 5px !important;
    border: 1px solid #007EB2;
    padding: 5px;
    text-align: center;
    margin: 5px;
    font-size: 1.2em !important;
    background-color: #fff;
}
.arrow  {
    margin-top: 100px;
}

</style>