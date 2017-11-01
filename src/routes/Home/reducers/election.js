const initialState = {
  electionId: 'dkijakarta',
  candidates: [],
  media: []
}

const election = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ELECTION':
      return Object.assign({}, state, {
        electionId: action.electionId
      })
    case 'ELECTION_DATA_RECEIVED':
      return Object.assign({}, state, {
        candidates: action.candidates.candidates,
        media: action.media.medias
      })
    default:
      return state
  }
}

export default election
