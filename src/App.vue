<template>
  <div id="app" class="mx-auto max-width-3">

    <header class="px3 left-align mb4">
      <div class="flex justify-between items-center">
        <div>
          <div class="h3 mb1 blue"><span class="fw-900">Quarterlee</span> <span>| How's life been the last 3 months?</span></div>
          <div class="h4 blue">Rank it below and get a quick summary.</div>
        </div>

        <div>
          <div class="fixed absolute-print top-0 right-0 p2 blue bg-white z1" v-if="someScoresAreGiven">
            <sentiment :score="scoreAverage"></sentiment>
            <div class="h6 bold">Overall</div>
          </div>
        </div>

      </div>

    </header>

    <div class="flex justify-center items-center my3 hide">
      <div class="ml2 flex blue">
        <div>
          <satisfied-sentiment></satisfied-sentiment>
          <div>Good</div>
        </div>
        <div class="mx2">
          <neutral-sentiment></neutral-sentiment>
          <div>Fair</div>
        </div>
        <div>
          <dissatisfied-sentiment></dissatisfied-sentiment>
          <div>Poor</div>
        </div>        
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Sentiment from '@/components/atoms/Sentiment'
import NeutralSentiment from '@/components/atoms/icons/sentiments/Neutral'
import SatisfiedSentiment from '@/components/atoms/icons/sentiments/Satisfied'
import DissatisfiedSentiment from '@/components/atoms/icons/sentiments/Dissatisfied'

import {
  mapGetters
} from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters('quarterly', [
      'scoreAverage',
      'someScoresAreGiven'
    ])
  },
  components: {
    Sentiment,
    NeutralSentiment,
    SatisfiedSentiment,
    DissatisfiedSentiment
  }
}
</script>

<style lang="scss">
@import './assets/scss/index.scss';

#app {
  font-family: 'Roboto Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
