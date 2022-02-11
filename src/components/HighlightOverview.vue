<template>
    <section class="pdf-output">
        <table class="highlight-overview">
            <thead>
                <th>Drittel</th>
                <th>Zeit</th>
                <th>Heim</th>
                <th>Auswärts</th>
                <th>Tor</th>
                <th>Bemerkungen</th>
            </thead>
            <tr>
                <td>1</td>
                <td>5:30</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td>Nichts</td>
            </tr>
            <tr>
                <td>1</td>
                <td>7:30</td>
                <td></td>
                <td></td>
                <td>1:0</td>
                <td>Rundqvist</td>
            </tr>
            <tr>
                <td>1</td>
                <td>02:30</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td>Nichts</td>
            </tr>
            <tr>
                <td>1</td>
                <td>22:30</td>
                <td></td>
                <td>X</td>
                <td></td>
                <td>Nichts</td>
            </tr>
            <tr>
                <td>1</td>
                <td>12:30</td>
                <td>X</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </section>
    <div class="bottom-sticker">
        <button name="pdfoutput">PDF drucken</button>
    </div>
</template>

<script>
export default {

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
.bottom-sticker {
    position: relative;
    bottom: 0px;
}
button  {
    border: 1px solid darkgray;
    width: 95vw;
    border-radius: 5px;
    padding: 1em;
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

</style>
