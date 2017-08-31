import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './candidatesection.css';

import CandidateList from './CandidateList';

import agusImg from './../../static/img/agus-silvi.jpg'
import ahokImg from './../../static/img/ahok-djarot.jpg'
import aniesImg from './../../static/img/anies-sandi.jpg'

export default class CandidateSection extends React.Component {

  constructor() {
    super();
    this.state = { data : [
      {
    		name: "Agus & Silvi",
    		img: "http://poskotanews.com/cms/wp-content/uploads/2016/09/agus-silvy1.jpg",
        counter: {
          positive_media: 6,
          negative_media: 2,
          neutral_media: 3
        }
    	},
    	{
    		name: "Ahok & Djarot",
    		img: "http://assets.kompas.com/data/photo/2017/02/15/221710120170215-GAR004780x390.JPG",
        counter: {
          positive_media: 4,
          negative_media: 3,
          neutral_media: 8
        }
    	},
    	{
    		name: "Anies & Sandi",
    		img: "http://pemilu-news.com/wp-content/uploads/2017/03/Anies-Sandi-Luncurkan-Salam-Bersama-untuk-Jakarta.-700x350.jpeg",
        counter: {
          positive_media: 2,
          negative_media: 8,
          neutral_media: 7
        }
    	}]
    }
  }

  render() {
    return (
      <div className="wrapper style1 candidate">
        <div className="row title">
          <h1>Candidates</h1>
        </div>
        <div className="row description">
          <p>This is all candidates which are participated in this election </p>
        </div>
        <CandidateList data={this.state.data}/>
        <div className="row load-more">
          <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
        </div>
      </div>
    );
  }
}
