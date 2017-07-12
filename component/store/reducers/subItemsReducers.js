// const initialState = {
//   // visible: false
//   items: [{visible: false}]
// };

// export default function subItemsReducers(state = [], action) {
//   switch (action.type) {
//     case 'OPEN':
//       return { ...state, items: [{visible: false}] }
//     case 'CLOSE':
//       return { ...state, items: [{visible: true}] }
//     default:
//       return state;
//   }
// }


export default function subItemsReducers(state = [], action) {
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