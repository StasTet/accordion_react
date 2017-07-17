import _ from 'lodash';
import {
    LOAD_DATA_REQUESTED,
    LOAD_DATA_OK,
    LOAD_DATA_FAIL,
    OPEN,
    CLOSE
} from '../constants';

const initialState = {
    loading: false,
    data: [],
    errors: null
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_DATA_REQUESTED:
            return {
                loading: true,
                data: action.data,
                errors: action.errors
            };

        case LOAD_DATA_OK:
            return {
                loading: false,
                data: action.data.map(item => _.assign({}, item, {
                    id: _.uniqueId(),
                    visible: false
                })),
                errors: action.errors
            }

        case LOAD_DATA_FAIL:
            return {
                loading: false,
                data: action.data,
                errors: action.errors
            };

        case OPEN:
            {
                const currentIndex = _.findIndex(state.data, (obj) => obj.id == action.payload);

                // делаем false для всех элементов
                state.data.map((element, index) => {

                    if (currentIndex != index) {
                        element.visible = false
                    }

                })

                const item = Object.assign(state.data[currentIndex]);
                item.visible = true;

                const items = state.data.map((dataItem) => {
                    return dataItem.id === item.id ? item : dataItem;
                });

                return { ...state,
                    data: items
                };
            }

        case CLOSE:
            {
                const currentIndex = _.findIndex(state.data, (obj) => obj.id == action.payload);

                const item = Object.assign(state.data[currentIndex]);
                item.visible = false;

                const items = state.data.map((dataItem) => {
                    return dataItem.id === item.id ? item : dataItem;
                });

                return { ...state,
                    data: items
                };
            }

        default:
            return state;
    }
}