import React from 'react';
import { Image } from 'react-bootstrap'

import Chart from '../charts/Chart'
import NewsSection from './NewsSection'

export default class MediaDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      data : [{
        url: "https://news.detik.com/berita/d-3631776/tiba-di-singapura-jokowi-langsung-temui-wni?_ga=2.170848544.1030738785.1504715262-247128134.1446071600",
        title: "Tiba di Singapura, Jokowi Langsung Temui WNI",
        timestamp: 1500534737000,
        content: "Singapura - Presiden Joko Widodo telah tiba di Singapura. Agenda pertama yang dia lakukan yakni langsung melakukan pertemuan dengan WNI yang ada di 'Negeri Singa' tersebut. Deputi Bidang Protokol, Pers, dan Media Sekretariat Presiden mengatakan, ketibaan Jokowi di Bandara Internasional Changi Singapura, Rabu (6/9/2017) disambut langsung oleh Duta Besar Indonesia untuk Singapura I Gusti Ngurah Swajaya, Menteri Pendidikan Singapura Ong Ye Kung dan Duta Besar Singapura untuk Indonesia Anil Kumar Nayar.",
        sentiments: ["Positif Ahok", "Negatif Jokowi"]
      }, {
        url: "https://travel.detik.com/fototravel/d-3631777/foto-wanita-cantik-yang-dibayar-buat-tidur-di-hotel-mewah?_ga=2.212807956.1030738785.1504715262-247128134.1446071600",
        title: "Foto: Wanita cantik yang Dibayar Buat Tidur di Hotel Mewah",
        timestamp: 1500534737000,
        content: "Melbourne - Menginap di hotel mewah tentu jadi keinginan para traveler. Namun tahukah kamu? Wanita cantik ini malah dibayar untuk tidur di hotel mewah.",
        sentiments: ["Positif Ahok", "Negatif Jokowi"]
      }
    ],
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div>
              <h1> Kompas </h1>
            </div>
            <div>
              <Image src={"http://assets.kompas.com/data/2016/wp/images/logokompascom.png"} responsive/>
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
        <div className="row">
            <NewsSection data={this.state.data}/>
        </div>
      </div>
    );
  }
}
