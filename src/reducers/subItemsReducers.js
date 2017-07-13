
const initialState = []

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'OPEN':
      return state.map((item, index) => {
        if (index !== action.id) {
          return item
        }
        return {...item, visible: true}
      })
    case 'CLOSE':
      return state.map((item, index) => {
        if (index !== action.id) {
          return item
        }
        return {...item, visible: false}
      })
    default:
      return state
  }
}