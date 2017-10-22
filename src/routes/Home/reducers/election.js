const initialState = {
  electionId: 'dkijakarta',
  candidates: [],
  media: []
}

const election = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SELECT_ELECTION':
      return Object.assign({}, state, {
        electionId: action.electionId
      })
    case 'ELECTION_DATA_RECEIVED':
      console.log(action.media.medias)
      return Object.assign({}, state, {
        candidates: action.candidates.candidates,
        media: action.media.medias
      })
    default:
      return state
  }
}

export default election
