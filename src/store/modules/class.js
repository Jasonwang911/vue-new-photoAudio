import * as types from './../types.js'

const state = {
  audioPlay: true,
}

const getters = {
  audioPlay: state => state.audioPlay,
}

const actions = {
  AUDIO_PLAY({
    commit
  }, res) {
    console.log(res)
    commit(types.AUDIO_PLAY, res);
  }
}

const mutations = {
  [types.AUDIO_PLAY](state, res) {
    state.audioPlay = res;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}