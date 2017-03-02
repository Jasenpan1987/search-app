import { combineReducers } from "redux";

import searchReducer from "./searchReducer"
import loadingReducer from "./loadingReducer"

export default combineReducers({
    search: searchReducer,
    loading: loadingReducer
});