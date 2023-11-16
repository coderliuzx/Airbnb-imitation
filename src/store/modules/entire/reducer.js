// 初始state
const initialState = {
  test: []
}


// entire的reducer函数
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'value':
      return { ...state }

    default:
      return state
  }
}

export default reducer