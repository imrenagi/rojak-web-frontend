import React from 'react'
import { Carousel } from 'react-bootstrap'

export default class ImageHeader extends React.Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img src='/src/static/img/land-first.jpg' />
          <Carousel.Caption>
            <h3>Rojak</h3>
            <p>Media Sentiment Analyzer!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/src/static/img/land-first.jpg' />
          <Carousel.Caption>
            <h3>Rojak</h3>
            <p>Media Sentiment Analyzer!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/src/static/img/land-first.jpg' />
          <Carousel.Caption>
            <h3>Rojak</h3>
            <p>Media Sentiment Analyzer!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
