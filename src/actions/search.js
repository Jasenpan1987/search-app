import axios from "axios";

import { SEARCH_SUCCESS, SEARCH_ERROR, SEARCH_LOADING } from "../constants/types";

const BACK_END_URL = "http://localhost:8080/api/";

export const searchAct = (keywords, urlkeywords) => {
    return dispatch => {
        dispatch({ type: SEARCH_LOADING, payload: true}); // loading starts

        axios.get(`${BACK_END_URL}?keywords=${keywords}&urlkeywords=${urlkeywords}`)
            .then(result => result.data)
            .then(data => {
                return data;
        })
        .then(data => {
            dispatch({ type: SEARCH_LOADING, payload: false }); // loading ends
            dispatch({ type: SEARCH_SUCCESS, payload: {data, status: "success"} });
        })
        .catch(err => {
            dispatch({ type: SEARCH_LOADING, payload: false }); // loading ends
            dispatch({ type: SEARCH_ERROR, payload: {data: "", status: "failed"} });
        })
    };
};