import React from 'react'
import { Modal, Header, Button, Icon, Checkbox } from 'semantic-ui-react'

import './annotatormodal.css'

export default class AnnotatorModal extends React.Component {
  render () {
    const loremipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    const sentiments = [
      'Positif Anies & Sandi', 'Negatif Anies & Sandi', 'Netral Anies & Sandi',
      'Positif Ahok & Djarot', 'Negatif Ahok & Djarot', 'Netral Ahok & Djarot',
      'Positif Agus & Silvy', 'Negatif Agus & Silvy', 'Netral Agus & Silvy'
    ]

    var checkboxes = sentiments.map((sentiment, idx) => {
      return (
        <Checkbox key={idx} className='checkbox' label={sentiment} />
      )
    })

    return (
      <Modal size='large' open={this.props.open} onClose={this.props.onClose}>
        <Modal.Header>
          <a href='https://facebook.com'> Judul Berita </a>
        </Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <Header>
              <h4>Kompas.com, 22 Januari 2018</h4>
              <h4>Penulis: Pitoy Markotoy</h4>
            </Header>
            <p>{loremipsum}</p>
            <p>{loremipsum}</p>
            <p>{loremipsum}</p>
            <h3>Centang Kotak Yang Sesuai</h3>
            {checkboxes}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
              Submit <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
