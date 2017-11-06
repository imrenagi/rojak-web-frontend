const initialState = {
  electionId: 'dkijakarta',
  mediaId: 'kompascom'
}

const media = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MEDIA_DATA':
      return Object.assign({}, state, {
        electionId: action.electionId,
        mediaId: action.mediaId
      })
    default:
      return state
  }
}

export default media
