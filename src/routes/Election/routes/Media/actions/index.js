export const loadMediaData = (electionId, mediaId) => ({
  type: 'LOAD_MEDIA_DATA',
  electionId,
  mediaId
})

export const loadMediaArticles = (electionId, mediaId, page) => ({
  type: 'LOAD_MEDIA_ARTICLES',
  electionId,
  mediaId,
  page
})
