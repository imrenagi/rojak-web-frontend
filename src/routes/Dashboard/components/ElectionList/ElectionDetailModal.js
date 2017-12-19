import React from 'react'
import { Modal, Header, Button, Icon, Form } from 'semantic-ui-react'

const provinces = [
  { key: '1', text: 'DKI Jakarta', value: '1' },
  { key: '2', text: 'Jawa Barat', value: '2' },
  { key: '3', text: 'Jawa Timur', value: '3' },
]

const cities = [
  { key: '1', text: 'Jakarta Pusat', value: '1' },
  { key: '2', text: 'Jakarta Barat', value: '2' },
  { key: '3', text: 'Jakarta Selatan', value: '3' },
  { key: '4', text: 'Jakarta Timur', value: '4' },
]

const electionTypes = [
  { key: '1', text: 'Pemilu Gubernur', value: 'GOVERNOR' },
  { key: '2', text: 'Pemilu Walikota', value: 'MAJOR' },
]

export default class ElectionDetailModal extends React.Component {
  constructor () {
    super()
    this.state = {
      id: '',
      name: '',
      election_date: '',
      campaign_start_date: '',
      campaign_end_date: '',
      province_id: '',
      city_id: '',
      election_type: ''
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    // this.setState({ submittedName: name, submittedEmail: email })
  }

  render () {
    return (
      <Modal size='large' open={this.props.open} onClose={this.props.onClose}>
        <Modal.Header>
          Detail Pemilu
        </Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input name='id' label='Id' placeholder='pilkada_dkijakarta_2018' onChange={this.handleChange} disable/>
              <Form.Input name='name' label='Name' placeholder='Pilkada DKI Jakarta 2018' onChange={this.handleChange} />
              <Form.Group widths='equal'>
                <Form.Input name='election_date' label='Tanggal Pemilu' placeholder='28/12/2017' onChange={this.handleChange} />
                <Form.Input name='campaign_start_date' label='Tanggal Kampanye Dimulai' placeholder='28/12/2017' onChange={this.handleChange} />
                <Form.Input name='campaign_end_date' label='Tanggal Kampanye Berakhir' placeholder='28/12/2017' onChange={this.handleChange} />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select name='province_id' label='Provinsi' options={provinces} placeholder='DKI Jakarta' onChange={this.handleChange} />
                <Form.Select name='city_id' label='Kota' options={cities} placeholder='Jakarta Pusat' onChange={this.handleChange} />
                <Form.Select name='election_type' label='Jenis Pemilu' options={electionTypes} placeholder='Pemilu Gubernur' onChange={this.handleChange} />
              </Form.Group>
              <Form.Button type='submit'>Submit</Form.Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
