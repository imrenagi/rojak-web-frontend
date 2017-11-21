'use strict'

var axios = require('axios')

class APIClient {
  constructor () {
    this.baseUrl = 'http://private-052434-rojak.apiary-mock.com'
  }

  login (username, password) {
    // return axios
    //   .post(`${this.baseUrl}/uaa/oauth/token?grant_type=password&username=${username}&password=${password}&client_id=browser`)
    return new Promise(function (resolve, reject) {
      resolve({
        token: '15fe237f-ae34-4524-a503-e586e6fecd8c',
        refresh_token: '35cc3322-eb69-4155-a120-f484b9ab93e5'
      })
    })
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

  loadMediaArticles (electionId, mediaId, page) {
    if (page === undefined || page === 0) page = 1
    return axios({
      method: 'get',
      url: this.baseUrl + '/analytics/medias/' + mediaId + '/elections/' + electionId + '/news?page=' + page + '&limit=10',
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

  loadCandidateDetail (electionId, candidateId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/elections/' + electionId + '/candidates/' + candidateId,
      responseType: 'json'
    })
  }

  loadCandidateStatistic (electionId, candidateId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/analytics/elections/' + electionId + '/candidates/' + candidateId + '/statistics',
      responseType: 'json'
    })
  }

  loadCandidateSentimentGroup (electionId, candidateId) {
    return axios({
      method: 'get',
      url: this.baseUrl + '/elections/' + electionId + '/candidates/' + candidateId + '/medias',
      responseType: 'json'
    })
  }
}

module.exports = APIClient
