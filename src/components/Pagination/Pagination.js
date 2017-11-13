import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: props.meta.page,
      totalPages: props.meta.total_pages
    }
  }

  handleItemClick = (e, { name }) => {
    if (this.state.activeItem !== parseInt(name)) {
      this.setState({ activeItem: parseInt(name) })
    }
  }

  handleNextClick = (e, { name }) => {
    if (this.state.activeItem !== this.state.totalPages) {
      this.setState({ activeItem: this.state.activeItem + 1 })
    }
  }

  handlePrevClick = (e, { name }) => {
    if (this.state.activeItem !== 1) {
      this.setState({ activeItem: this.state.activeItem - 1 })
    }
  }

  render () {
    const { activeItem, totalPages } = this.state
    var maxPageShowed = totalPages
    var menus = Array.from(Array(maxPageShowed + 2).keys()).map((num) => num)
      .map((num) => {
        if (num === 0) {
          return (
            <Menu.Item name='Prev' active={activeItem === 1} onClick={this.handlePrevClick} />
          )
        } else if (num === maxPageShowed + 1) {
          return (
            <Menu.Item name='Next' active={activeItem >= totalPages} onClick={this.handleNextClick} />
          )
        } else {
          var name = num + ''
          return (
            <Menu.Item name={name} active={activeItem === num} onClick={this.handleItemClick} />
          )
        }
      })

    return (
      <Menu size='massive' pagination>
        {menus}
      </Menu>
    )
  }
}
