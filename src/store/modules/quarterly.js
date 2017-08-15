import mean from 'lodash/mean'
import round from 'lodash/round'
import isNull from 'lodash/isNull'

const labels = () => ([
  'General outlook',
  'Planning ahead',
  'Sleeping habits',
  'Some daily creativity',
  'Working hard',
  'Staying calm',
  'Earning a living',
  'Feeling content',
  'Personal growth',
  'Taking care',
  'Being awesome',
  'Showing kindness',
  'Having fun',
  'Trying hard',
  'Going outdoors',
  'Physical health',
  'Eating well',
  'Mental health',
  'Calling home',
  'Being a friend',
  'Enjoying your space',
  'That 1 thing',
  'Figuring it out'
])

const statementObj = (l) => ({label: l, score: null})

export const state = {
  statements: labels().map(statementObj)
}
export const actions = {
  updateScore ({
    commit
  }, payload) {
    commit('setScore', payload)
  }
}
export const mutations = {
  setScore (state, { index, score }) {
    state.statements[index].score = score
  }
}

export const getters = {
  scores: ({statements}) => statements.map(({score}) => score).filter(score => !isNull(score)),
  statements: ({statements}) => statements,
  scoreAverage: (state, {scores}) => round(mean(scores)),
  someScoresAreGiven: (state, {scores}) => scores.some(score => !isNull(score))
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
