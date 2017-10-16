import React from 'react'
import { Modal } from 'semantic-ui-react'

const style = {
  textAlign:'center'
};

export default class CandidateChartModal extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Modal size={this.props} open={this.props.open} onClose={this.props.onClose}>
          <Modal.Header style={style}>
            <h1>KANDIDAT</h1>
          </Modal.Header>
          <Modal.Content>
            <p>Grafik kandidat</p>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
