
const loading = (state = false, action) => {
  switch (action.type) {
    case 'SELECT_ELECTION':
      return true
    case 'ELECTION_DATA_RECEIVED':
      return false
    case 'ELECTION_DATA_ERROR':
      return false
    case 'LOAD_MEDIA_DATA':
      return true
    case 'MEDIA_DATA_RECEIVED':
      return false
    case 'MEDIA_DATA_ERROR':
      return false
    case 'LOAD_CANDIDATE_DATA':
      return true
    case 'CANDIDATE_DATA_RECEIVED':
      return false
    case 'CANDIDATE_DATA_ERROR':
      return false
    default:
      return state
  }
}

export default loading
