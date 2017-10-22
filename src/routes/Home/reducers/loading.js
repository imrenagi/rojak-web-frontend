
const loading = (state = false, action) => {
  switch (action.type) {
    case 'SELECT_ELECTION':
      return true
    case 'ELECTION_DATA_RECEIVED':
      return false
    case 'ELECTION_DATA_ERROR':
      return false
    default:
      return state
  }
}

export default loading
