<template>
    <MatchSetup/>
    <HighlightInput/>
    <HighlightOverview/>
</template>

<script>
import MatchSetup from './components/MatchSetup.vue'
import HighlightInput from './components/HighlightInput.vue'
import HighlightOverview from './components/HighlightOverview.vue'

export default {
 
  name: 'App',
  components: {
    MatchSetup,
    HighlightInput,
    HighlightOverview
  }
}
</script>

<style>
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),   url(./fonts/OpenSans.ttf) format("truetype");
}

#app  {
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    max-height: 100vh;
    font-size: 16px;
}

</style>
