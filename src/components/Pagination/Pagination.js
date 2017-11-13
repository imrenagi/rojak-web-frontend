import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: props.meta.page,
      totalPages: props.meta.total_pages,
      maxItemInSelector: 10,
      onSelectorClicked: props.onSelectorClicked
    }
  }

  handleItemClick = (e, { name }) => {
    if (this.state.activeItem !== parseInt(name)) {
      this.setState({ activeItem: parseInt(name) })
      this.state.onSelectorClicked(parseInt(name))
    }
  }

  handleNextClick = (e, { name }) => {
    if (this.state.activeItem !== this.state.totalPages) {
      this.setState({ activeItem: this.state.activeItem + 1 })
      this.state.onSelectorClicked(this.state.activeItem + 1)
    }
  }

  handlePrevClick = (e, { name }) => {
    if (this.state.activeItem !== 1) {
      this.setState({ activeItem: this.state.activeItem - 1 })
      this.state.onSelectorClicked(this.state.activeItem - 1)
    }
  }

  render () {
    const { activeItem, totalPages, maxItemInSelector } = this.state
    var startNum = Math.floor((activeItem - 1) / maxItemInSelector) * maxItemInSelector
    var array = []
    for (var idx = startNum; idx < totalPages; idx++) {
      if (array.length < maxItemInSelector) {
        array.push(idx + 1)
      } else {
        break
      }
    }
    if (totalPages > maxItemInSelector) {
      if (array.length < maxItemInSelector) {
        for (var idx2 = startNum; array.length < maxItemInSelector && idx > 0; idx--) {
          array.unshift(idx2)
        }
      }
    }
    array.push(-1)
    array.unshift(-2)

    var menus = array.map((num) => num)
      .map((num) => {
        if (num === -2) {
          return (
            <Menu.Item name='Prev' active={activeItem === 1} onClick={this.handlePrevClick} />
          )
        } else if (num === -1) {
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
