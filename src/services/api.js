'use strict'

var axios = require('axios')

class APIClient {
  constructor () {
    this.baseUrl = 'http://private-052434-rojak.apiary-mock.com'
  }

  loadAllCandidate (electionId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/elections/' + electionId + '/candidates',
      responseType: 'json'
    })
  }

  loadAllMedia (electionId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/analytics/elections/' + electionId + '/medias?page=1&limit=6',
      responseType: 'json'
    })
  }

  loadAllNewsOfMedia (electionId, mediaId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/analytics/medias/' + mediaId + '/elections/' + electionId + '/news',
      responseType: 'json'
    })
  }

  loadMediaInfo (mediaId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/medias/' + mediaId,
      responseType: 'json'
    })
  }

  loadMediaArticles (electionId, mediaId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/analytics/medias/' + mediaId + '/elections/' + electionId + '/news?page=1&limit=10',
      responseType: 'json'
    })
  }

  loadMediaStatisticForAllCandidate (electionId, mediaId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/analytics/elections/' + electionId + '/medias/' + mediaId + '/statistics',
      responseType: 'json'
    })
  }
}

module.exports = APIClient
