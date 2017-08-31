import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './mediasection.css'

import MediaList from './MediaList'

export default class MediaSection extends React.Component {

  constructor() {
    super()
    this.state = {
      data : [
        {
          name: "Kompas.com",
          logo: "http://assets.kompas.com/data/2016/wp/images/logokompascom.png",
          candidate_img: "http://poskotanews.com/cms/wp-content/uploads/2016/09/agus-silvy1.jpg"
        },
        {
          name: "CNN Indonesia",
          logo: "http://i0.wp.com/smactf.sch.id/news/wp-content/uploads/2016/07/CNN-Indonesia-Logo.jpg",
          candidate_img: "http://pemilu-news.com/wp-content/uploads/2017/03/Anies-Sandi-Luncurkan-Salam-Bersama-untuk-Jakarta.-700x350.jpeg"
        },
        {
          name: "Detik.com",
          logo: "http://www.detik.com/dnewgeneration/images/logo1.png",
          candidate_img: "http://assets.kompas.com/data/photo/2017/02/15/221710120170215-GAR004780x390.JPG"
        },
        {
          name: "NY Times",
          logo: "http://1000logos.net/wp-content/uploads/2017/04/New-York-Times-Logo.png",
          candidate_img: "http://pemilu-news.com/wp-content/uploads/2017/03/Anies-Sandi-Luncurkan-Salam-Bersama-untuk-Jakarta.-700x350.jpeg"
        },
        {
          name: "Kumparan",
          logo: "http://pnptc.s3.amazonaws.com/wp-content/uploads/sites/10/2017/08/Kumparan.png",
          candidate_img: "http://pemilu-news.com/wp-content/uploads/2017/03/Anies-Sandi-Luncurkan-Salam-Bersama-untuk-Jakarta.-700x350.jpeg"
        },
        {
          name: "Liputan 6",
          logo: "https://cdn0-a.production.liputan6.static6.com/logos/188/original/083906000_1503994462-088099700_1500456552-049186300_1499071482-Logo_Desktop_Liputan6.png",
          candidate_img: "http://assets.kompas.com/data/photo/2017/02/15/221710120170215-GAR004780x390.JPG"
        }
      ]
    };
  }

  render() {
    return (
      <div className="wrapper style1 media">
        <div className="row title">
          <h1>Media Analytics</h1>
        </div>
        <div className="row description">
          <p>Check out our analytics result about who is/are the candidate/s which might be supported by a news media</p>
        </div>
        <MediaList data={this.state.data} />
        <div className="row load-more">
          <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
        </div>
      </div>
    );
  }
}
