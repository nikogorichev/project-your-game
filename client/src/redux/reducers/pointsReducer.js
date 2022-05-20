const initialState = {
  points: 0
}

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PLUS_POINTS':
      return {
        ...state, points: state.points + action.payload
      }

      case 'MINUS_POINTS':
      return {
        ...state, points: state.points - action.payload
      }
      default: {
        return state
      }
  }
}
