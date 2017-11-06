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
          console.log(err)
          next({
            type: 'ELECTION_DATA_ERROR',
            err
          })
        })
      break
    case 'LOAD_MEDIA_DATA':
      loadMediaData(action.electionId, action.mediaId)
        .then(data => {
          console.log(data)
          next({
            type: 'MEDIA_DATA_RECEIVED',
            // candidates: data[0].data,
            // media: data[1].data
          })
        }).catch(err => {
          console.log(err)
          next({
            type: 'MEDIA_DATA_ERROR',
            err
          })
        })
      break
    default:
      break
  }
}

export default dataService
