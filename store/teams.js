export const state = () => ({
  teams: [],
})

export const mutations = {
  SET_TEAM(state, teams) {
    state.teams = teams
  },
}

export const getters = {
  getTeams: (state) => {
    return state.teams
  },
}

export const actions = {
  CreateCLUB({ commit, state }, params) {
    const clubInformation = params
    try {
      clubInformation != null
      return commit('SET_TEAM', state.team + clubInformation)
    } catch {
      console.log('club information', clubInformation)
    }
  },
}
