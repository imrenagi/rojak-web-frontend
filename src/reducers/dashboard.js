const initialState = {
  selectedMenu: 'elections',
}

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_MENU':
      console.log(action)
      return Object.assign({}, state, {
        selectedMenu: action.selectedMenu
      })
    default:
      return state
  }
}

export default dashboard
