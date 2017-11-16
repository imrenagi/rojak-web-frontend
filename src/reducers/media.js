const initialState = {
  electionId: 'dkijakarta',
  mediaId: 'kompascom',
  metadata : {},
  articles : [],
  articlesMeta: {},
  statistics : {}
}

const media = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MEDIA_DATA':
      console.log(action)
      return Object.assign({}, state, {
        electionId: action.electionId,
        mediaId: action.mediaId
      })
    case 'MEDIA_DATA_RECEIVED':
      return Object.assign({}, state, {
        metadata: action.metadata,
        articles: action.articles,
        articlesMeta: action.articlesMeta,
        statistics: action.statistics
      })
    case 'ARTICLES_DATA_RECEIVED':
      console.log(action)
      return Object.assign({}, state, {
        articles: action.articles,
        articlesMeta: action.articlesMeta,
      })
    default:
      return state
  }
}

export default media
