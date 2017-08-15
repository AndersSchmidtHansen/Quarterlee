<template>
  <div>
    <transition-group 
     name="staggered-fade" 
     tag="ul" 
     class="list-reset pl2 pr2" 
     :css="false"
     @beforeEnter="beforeEnter"
     @enter="enter"
     @leave="leave"
     appear>
      <li v-for="(statement, index) of statements" :key="statement.label" :data-index="index" :class="[classes.statementItem]">
        <span v-text="statement.label" class="h4 md-h3 bold pl2"></span>
        <sentiments @onSentimentClicked="onSentimentClicked($event, index)"></sentiments>
      </li>
    </transition-group>
  </div>
</template>

<script>
import anime from 'animejs'

import {
  mapActions,
  mapGetters
} from 'vuex'

import Sentiments from '@/components/molecules/Sentiments'

export default {
  name: 'hello',
  computed: {
    ...mapGetters('quarterly', [
      'statements'
    ]),
    classes () {
      return {
        statementItem: `left-align blue m1 mb3 border-left border-top border-bottom border-blue border-width-2 flex justify-between items-center lh0`
      }
    }
  },
  methods: {
    ...mapActions('quarterly', [
      'updateScore'
    ]),
    onSentimentClicked (score, index) {
      this.updateScore({index: index, score: score})
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'scale(.95) translateY(30px)'
    },
    enter (el, done) {
      const playAnim = () => anim.play()

      const anim = anime({
        targets: el,
        opacity: 1,
        complete: done,
        delay: el => el.dataset.index * 100,
        translateY: 0,
        scale: 1,
        autoplay: false
      })

      setTimeout(playAnim, 250)
    },
    leave () {}
  },
  components: {
    Sentiments
  }
}
</script>

<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>