<template>
  <span class="flex">
    <div v-for="(sentiment, index) of sentiments" :key="index" :class="[classes.sentimentContainer.default, isSelected(index) ? classes.sentimentContainer.active : '']" @click="onSentimentClick(index, sentiment.score)">
      <component :is="sentiment.comp" :class="[isSelected(index) ? '' : 'muted gray white-hover']"></component>
    </div>
  </span>
</template>

<script>
import NeutralSentiment from '@/components/atoms/icons/sentiments/Neutral'
import SatisfiedSentiment from '@/components/atoms/icons/sentiments/Satisfied'
import DissatisfiedSentiment from '@/components/atoms/icons/sentiments/Dissatisfied'

export default {
  name: 'sentiments',
  data () {
    return {
      selectedIndex: null,
      sentiments: [{
        comp: 'SatisfiedSentiment',
        score: 2
      }, {
        comp: 'NeutralSentiment',
        score: 1
      }, {
        comp: 'DissatisfiedSentiment',
        score: 0
      }]
    }
  },
  computed: {
    classes () {
      return {
        sentimentContainer: {
          default: `border-left border-blue border-right border-width-2 p1 border-width-no-middle cursor-pointer bg-blue-hover white-hover`,
          active: 'white bg-blue'
        }
      }
    }
  },
  methods: {
    select (index) { this.selectedIndex = index },
    isSelected (index) { return (index === this.selectedIndex) },
    onSentimentClick (index, score) {
      this.$emit('onSentimentClicked', score)
      this.select(index)
    }
  },
  components: {
    NeutralSentiment,
    SatisfiedSentiment,
    DissatisfiedSentiment
  }
}
</script>

