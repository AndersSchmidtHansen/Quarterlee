<template>
  <component :is="sentiment"></component>
</template>

<script>
  import NeutralSentiment from '@/components/atoms/icons/sentiments/Neutral'
  import SatisfiedSentiment from '@/components/atoms/icons/sentiments/Satisfied'
  import DissatisfiedSentiment from '@/components/atoms/icons/sentiments/Dissatisfied'
  export default {
    name: 'sentiment',
    props: {
      score: {
        type: Number,
        default: 1
      }
    },
    computed: {
      sentiment () {
        const sentiments = {
          '2': 'SatisfiedSentiment',
          '1': 'NeutralSentiment',
          '0': 'DissatisfiedSentiment'
        }
        return sentiments[this.score]
      }
    },
    components: {
      NeutralSentiment,
      SatisfiedSentiment,
      DissatisfiedSentiment
    }
  }
</script>
