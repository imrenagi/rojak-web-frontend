const initialState = {
  electionId: 'dkijakarta',
  mediaId: 'kompascom',
  metadata : {},
  articles : [],
  statistics : {}
}

const media = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MEDIA_DATA':
      return Object.assign({}, state, {
        electionId: action.electionId,
        mediaId: action.mediaId
      })
    case 'MEDIA_DATA_RECEIVED':
      console.log(action)
      return Object.assign({}, state, {
        metadata: action.metadata,
        articles: action.articles,
        statistics: action.statistics
      })
    default:
      return state
  }
}

export default media
