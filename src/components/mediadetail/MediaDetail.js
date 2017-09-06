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
          title: {
              text: 'Sentiment Trends from all media'
          },

          subtitle: {
              text: 'This belongs to Jokowi and Anies in Pilkada DKI'
          },

          yAxis: {
              title: {
                  text: 'Number of News'
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
              name: 'Positive News',
              data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }, {
              name: 'Negative News',
              data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }, {
              name: 'Neutral News',
              data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          }]
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
              <Chart container="chart1" options={this.state.options} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Chart container="chart2" options={this.state.options} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Chart container="chart3" options={this.state.options} />
            </div>
        </div>
        <div className="row">
            <NewsSection data={this.state.data}/>
        </div>
      </div>
    );
  }
}
