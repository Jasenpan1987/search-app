import axios from "axios";

import { SEARCH_SUCCESS, SEARCH_ERROR } from "../constants/types";

const BACK_END_URL = "http://localhost:8080/api/";

export const searchAct = (keywords, url) => {
    console.log("searchAct: ", keywords, url)
    return dispatch => {
        axios.get(`${BACK_END_URL}?keywords=${keywords}&url=${url}`)
            .then(result => result.data)
            .then(data => {
                console.log(data);
                return data;
        })
        .then(data => dispatch({ type: SEARCH_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: SEARCH_ERROR, payload: err.message }))
    };
};