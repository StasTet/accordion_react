const initialState = { loading: false, data: [], errors: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case 'LOAD_DATA_REQUESTED':
      return { loading: true, data: [], errors: null };

    case 'LOAD_DATA_OK':
      return { loading: false, data: action.data, errors: null };

    case 'LOAD_DATA_FAIL':
      return { loading: false, data: [], errors: action.err };

    case 'OPEN':
      return {
                loading: false,
                data: state.data.map((item, index) => {
                  if (index !== action.id) {
                    return item
                  }
                  return {...item, visible: true}
                }),
                errors: null
            }

    case 'CLOSE':
      return {
                loading: false,
                data: state.data.map((item, index) => {
                  if (index !== action.id) {
                    return item
                  }
                  return {...item, visible: false}
                }),
                errors: null
             }

    default:
      return state;
  }
}