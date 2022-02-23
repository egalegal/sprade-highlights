<template>
    <section class="pdf-output">
        <table class="highlight-overview">
            <thead>
                <tr>
                    <th colspan="6">Highlights</th>
                </tr>
                <tr>
                    <th colspan="2">Datum: {{ store.state.date }}</th>
                    <th colspan="4">Spiel: {{ store.state.homeTeam }} - {{ store.state.awayTeam }}</th>
                </tr>
                <tr>
                    <th>Drittel</th>
                    <th>Zeit</th>
                    <th>Heim</th>
                    <th>Auswärts</th>
                    <th>Tor</th>
                    <th>Bemerkungen</th>
                </tr>
            </thead>
            <tr v-for="(item, idx) in highlights" :key="idx">
                <td>{{ item.third }}</td>
                <td>{{ item.time }}</td>
                <td v-if="item.team == 'Home'">X</td><td v-else></td>
                <td v-if="item.team == 'Away'">X</td><td v-else></td>
                <td v-if="item.goals">{{ item.goals }}</td>
                <td>{{ item.chance}}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex"

export default {
    setup() {
       
        const store = useStore();

        const highlights = computed(() => store.getters.highlights)
        return { store, highlights }
    }
}
</script>

<style>
.pdf-output {
    font-family: "Open Sans";
    display: flex;
    /* position: absolute; */
    /* z-index: 5; */
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
}

.highlight-overview {
    width: 100%;
    font-size: 3vw;
}

tr, th {
    border: 1px solid black;
}

td  {
    text-align: center;
    border: 1px solid black;
}

@media print {
    @page {
        size: A4;
    }
    .pdf-output {
        width: 100vw;
    }
    .highlight-overview {
        font-size: .8em !important;
        width: 100vw;
    }

    td, th {
        border: 2px solid black;
    }
}
</style>
