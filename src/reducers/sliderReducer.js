import _ from 'lodash';
import {
    LOAD_SLIDER_REQUESTED,
    LOAD_SLIDER_OK,
    LOAD_SLIDER_FAIL,
    OPEN_SLIDE,
    CLOSE_SLIDE,
    PREV_SLIDE,
    NEXT_SLIDE
} from '../constants';

const initialState = {
    loading: false,
    data: [],
    errors: null
};

export default function reducer(state = initialState, action) {

    const currentIndex = _.findIndex(state.data, (obj) => obj.id == action.payload);
    let newArray = _.cloneDeep(state.data);

    switch (action.type) {

        case LOAD_SLIDER_REQUESTED:
            return {
                loading: true,
                data: action.data,
                errors: action.errors
            };

        case LOAD_SLIDER_OK:
            return {
                loading: false,
                data: action.data.map(item => _.assign({}, item, {
                    id: _.uniqueId(),
                    visible: false
                })),
                errors: action.errors
            }

        case LOAD_SLIDER_FAIL:
            return {
                loading: false,
                data: action.data,
                errors: action.errors
            };

        case OPEN_SLIDE:
            return {
                loading: false,
                data: state.data.map((item, index) => {
                    if(index !== currentIndex) {
                        return item;
                    }
                    return {
                        ...item, visible: true
                    }
                }),
                errors: action.errors
            }
            

        case CLOSE_SLIDE:
            return {
                loading: false,
                data: state.data.map((item, index) => {
                    if(item.id !== action.payload) {
                        return {
                            ...item, visible: false
                        }
                    }
  
                    return item;
                }),
                errors: action.errors
            }

        case PREV_SLIDE:

            newArray.unshift(newArray.pop())
            
            return {
                loading: false,
                data: newArray,
                errors: action.errors
            }
        
        case NEXT_SLIDE:

            newArray.push(newArray.shift())

            return {
                loading: false,
                data: newArray,
                errors: action.errors
            }

        default:
            return state;
    }
}