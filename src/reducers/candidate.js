const initialState = {
  electionId: 'dkijakarta',
  candidateId: '1',
  data: {},
  statistics: {},
  sentimentGroups: {}
}

const candidate = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CANDIDATE_DATA':
      return Object.assign({}, state, {
        electionId: action.electionId,
        candidateId: action.candidateId
      })
    case 'CANDIDATE_DATA_RECEIVED':
      return Object.assign({}, state, {
        data: action.data,
        statistics: action.statistics,
        sentimentGroups: action.sentimentGroups
      })
    default:
      return state
  }
}

export default candidate
