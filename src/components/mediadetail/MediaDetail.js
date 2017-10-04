import React from 'react';
import { Image } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Chart from '../charts/Chart'
import NewsSection from './NewsSection'

import styles from './MediaDetail.css';

var APIClient = require('../../services/api.js');
var client = new APIClient();

export default class MediaDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      data : [],
      hashtagTerkait : ["pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi", "pemilujakarta", "pemiludki", "agussilvi", "ahokdjarot", "aniessandi"],
      options: {
        positive_stat:
        {
            title: {
                text: 'Tren Berita Positif'
            },
            subtitle: {
                text: 'Jumlah berita positif untuk masing-masing kandidat'
            },
            yAxis: {
                title: {
                    text: 'Jumlah berita'
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            },
            xAxis: {
                type: 'datetime'
            },
            plotOptions: {
              series: {
                  pointStart: Date.UTC(2010, 0, 1),
                  pointInterval: 24 * 3600 * 1000 // one day
              }
            },
            series: [{
                name: 'Ahok',
                data: [3,5,7,3,5]
            }, {
                name: 'Jokowi',
                data: [18,29,30,23,33]
            }, {
                name: 'Anies',
                data: [10,23,13,24,23]
            }]
          },
        negative_stat: {
            title: {
                text: 'Tren Berita Negatif'
            },
            subtitle: {
                text: 'Jumlah berita negatif untuk masing-masing kandidat'
            },
            yAxis: {
                title: {
                    text: 'Jumlah berita'
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            },
            xAxis: {
                type: 'datetime'
            },
            plotOptions: {
              series: {
                  pointStart: Date.UTC(2010, 0, 1),
                  pointInterval: 24 * 3600 * 1000 // one day
              }
            },
            series: [{
                name: 'Ahok',
                data: [21,32,12,32,42]
            }, {
                name: 'Jokowi',
                data: [12,15,4,23,5]
            }, {
                name: 'Anies',
                data: [42,32,14,23,43]
            }]
          },
        neutral_stat: {
            title: {
                text: 'Tren Berita Netral'
            },
            subtitle: {
                text: 'Jumlah berita netral untuk masing-masing kandidat'
            },
            yAxis: {
                title: {
                    text: 'Jumlah berita'
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            },
            xAxis: {
                type: 'datetime'
            },
            plotOptions: {
              series: {
                  pointStart: Date.UTC(2010, 0, 1),
                  pointInterval: 24 * 3600 * 1000 // one day
              }
            },
            series: [{
                name: 'Ahok',
                data: [1,3,5,10,15]
            }, {
                name: 'Jokowi',
                data: [2,3,4,3,2]
            }, {
                name: 'Anies',
                data: [6,4,8,10,12]
            }]
          }
      }
    }
  }

  componentDidMount() {
    this.loadAllNews("dkijakarta","kompascom");
  }

  loadAllNews(electionId, mediaId) {
    var self = this;
    //TODO change the hardcoded part
    client.loadAllNewsOfMedia(electionId, mediaId)
      .then(function(res) {
        console.log(res);
        self.setState({data : res.data.news});
      }).catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div>
              <Image src={"http://assets.kompas.com/data/2016/wp/images/logokompascom.png"} responsive/>
            </div>
            <div>
              <Button bsSize="large" target="_blank" href="https://facebook.com/">Kunjungi Website</Button>
            </div>
          </div>
        </div>
        <div className="row chart">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Chart container="chart1" options={this.state.options.positive_stat} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Chart container="chart2" options={this.state.options.negative_stat} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Chart container="chart3" options={this.state.options.neutral_stat} />
            </div>
        </div>
        <div className="divider row related-hashtag">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <h1>Hashtag Terkait</h1>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <h3>{this.state.hashtagTerkait.map((item) => "#" + item + " ")}</h3>
            </div>
        </div>
        <div className="row">
            <NewsSection data={this.state.data}/>
        </div>
      </div>
    );
  }
}
