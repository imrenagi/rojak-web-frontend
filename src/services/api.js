"use strict";

var axios = require('axios');

class APIClient {
  constructor() {
    this.baseUrl = "http://private-anon-b8d16dd661-rojak.apiary-mock.com";
  }

  loadAllCandidate(electionId) {
    return axios({
      method: 'get',
      url: this.baseUrl+"/elections/"+electionId+"/candidates",
      responseType: 'json'
    })
  }
}

module.exports = APIClient;
