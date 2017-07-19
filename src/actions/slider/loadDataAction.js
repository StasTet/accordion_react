import axios from 'axios';
import {
            LOAD_SLIDER_REQUESTED,
            LOAD_SLIDER_OK,
            LOAD_SLIDER_FAIL,            
        } from '../../constants';

const getData = (urlJson) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_SLIDER_REQUESTED,
            data: [],
            errors: null
        });

        axios
            .get(urlJson)
            .then((res) => {
                dispatch({
                    type: LOAD_SLIDER_OK,
                    data: res.data,
                    errors: null
                })
            })
            .catch((err) => {
                dispatch({
                    type: LOAD_SLIDER_FAIL,
                    data: [],
                    errors: `${err}`
                })
            })
    }
}

const setSlide = (type, id) => {
    return {
      type: type,
      payload: id
    }
}

const moveSlide = (type) => {
    return {
        type: type,
        payload
    }
}


export { getData, setSlide, moveSlide }
