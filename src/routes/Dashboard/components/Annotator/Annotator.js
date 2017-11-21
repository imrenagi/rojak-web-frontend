import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import AnnotatorModal from './../AnnotationModal'

class Annotator extends React.Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  handleItemClick = name => this.setState({ activeItem: name })
  show = () => this.setState({ open:true });
  close = () => this.setState({ open:false });

  render () {
    const data = [
      { id: 1, title: 'Berita 1', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 2, title: 'Berita 2', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 1 },
      { id: 3, title: 'Berita 3', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 4, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 5, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 6, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 7, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 8, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 9, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 10, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 11, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 12, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 1 },
      { id: 13, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 1 },
      { id: 14, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 15, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
      { id: 16, title: 'Berita 4', media_name: 'Kompas.com', article_url: 'https://facebook.com', is_labeled: 0 },
    ]

    const tableData = data.map((article) => {
      let status = null
      if (article.is_labeled) {
        status = <Icon name='checkmark' />
      } else {
        status = <Icon name='close' />
      }

      return (
        <Table.Row positive={article.is_labeled === 1} key={article.id} >
          <Table.Cell>{article.id}</Table.Cell>
          <Table.Cell>{article.title}</Table.Cell>
          <Table.Cell>{article.media_name}</Table.Cell>
          <Table.Cell>{article.article_url}</Table.Cell>
          <Table.Cell>
            {status}
            {article.is_labeled ? 'Selesai' : 'Butuh Label'}
          </Table.Cell>
          <Table.Cell>
            <Button floated='right' icon labelPosition='left' primary size='small'
              disabled={article.is_labeled === 1}
              onClick={this.show}>
              <Icon name='edit' /> Edit
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    })

    const { open } = this.state
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Judul</Table.HeaderCell>
              <Table.HeaderCell>Nama Media</Table.HeaderCell>
              <Table.HeaderCell>Tautan Artikel</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {tableData}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='arrow right' /> Next
                </Button>
                <Button floated='left' icon labelPosition='left' primary size='small'>
                  <Icon name='arrow left' /> Prev
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <AnnotatorModal open={open} onClose={this.close} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const AnnotatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotator)

export default withRouter(AnnotatorContainer)
