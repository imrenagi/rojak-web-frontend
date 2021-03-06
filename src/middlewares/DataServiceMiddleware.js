var APIClient = require('./../services/api')
var client = new APIClient()

function loadHomeData (electionId) {
  return Promise.all([
    client.loadAllCandidate(electionId),
    client.loadAllMedia(electionId)
  ])
}

function loadMediaData (electionId, mediaId) {
  return Promise.all([
    client.loadMediaInfo(mediaId),
    client.loadMediaArticles(electionId, mediaId),
    client.loadMediaStatisticForAllCandidate(electionId, mediaId)
  ])
}

function loadCandidateData (electionId, candidateId) {
  return Promise.all([
    client.loadCandidateDetail(electionId, candidateId),
    client.loadCandidateStatistic(electionId, candidateId),
    client.loadCandidateSentimentGroup(electionId, candidateId)
  ])
}

export const dataService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'SELECT_ELECTION':
      loadHomeData(action.electionId)
        .then(data => {
          next({
            type: 'ELECTION_DATA_RECEIVED',
            candidates: data[0].data,
            media: data[1].data
          })
        }).catch(err => {
          next({
            type: 'ELECTION_DATA_ERROR',
            err
          })
        })
      break
    case 'LOAD_MEDIA_DATA':
      loadMediaData(action.electionId, action.mediaId)
        .then(data => {
          next({
            type: 'MEDIA_DATA_RECEIVED',
            metadata: data[0].data,
            articles: data[1].data.news,
            articlesMeta: data[1].data.meta,
            statistics: data[2].data
          })
        }).catch(err => {
          next({
            type: 'MEDIA_DATA_ERROR',
            err
          })
        })
      break
    case 'LOAD_MEDIA_ARTICLES':
      client.loadMediaArticles(action.electionId, action.mediaId, action.page)
        .then(data => {
          next({
            type: 'ARTICLES_DATA_RECEIVED',
            articles: data.data.news,
            articlesMeta: data.data.meta
          })
        }).catch(err => {
          next({
            type: 'ARTICLES_DATA_ERROR',
            err
          })
        })
      break
    case 'LOAD_CANDIDATE_DATA':
      loadCandidateData(action.electionId, action.candidateId)
        .then(data => {
          next({
            type: 'CANDIDATE_DATA_RECEIVED',
            data: data[0].data,
            statistics: data[1].data,
            sentimentGroups: data[2].data
          })
        }).catch(err => {
          next({
            type: 'CANDIDATE_DATA_ERROR',
            err
          })
        })
      break
    default:
      break
  }
}

export default dataService
