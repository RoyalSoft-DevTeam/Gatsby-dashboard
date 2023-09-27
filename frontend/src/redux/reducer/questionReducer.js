const initialState = {
  applyQuestion: null
}

const requestReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ALL_QUESTION': {
      return {
        ...state,
        applyQuestion: payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default requestReducer
