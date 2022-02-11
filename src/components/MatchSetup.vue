!<template>
    <section class="match-setup" :class="{'match-setup--active': MatchSetupActive }">
        <img src="../assets/sprade.png"/>
        <h1>Highlights</h1>
        <input name="MatchDate" type="date" v-model="MatchDate" />
        <select name="hometeam" v-model="hometeam"> 
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
        <select name="awayteam" v-model="awayteam">
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
    </section>
</template>

<script>
export default {
    data() {
        return {
        MatchDate: Date,
        hometeam: "Heimteam",
        awayteam: "Auswärtsteam",
        }
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
    font-size: 1.2em;
    background-color: #fff;
}
.arrow  {
    margin-top: 100px;
}

</style>