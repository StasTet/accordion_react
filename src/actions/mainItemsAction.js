import axios from 'axios';
import {
            LOAD_DATA_REQUESTED,
            LOAD_DATA_OK,
            LOAD_DATA_FAIL
        } from '../constants'

export const getData = (urlJson) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_DATA_REQUESTED,
        });

        axios
            .get(urlJson)
            .then((res) => {
                dispatch({
                    type: LOAD_DATA_OK,
                    data: res.data,
                    errors: null
                })
            })
            .catch((err) => {
                dispatch({
                    type: LOAD_DATA_FAIL,
                    data: null,
                    errors: err.status
                })
            })
    }
        
}
