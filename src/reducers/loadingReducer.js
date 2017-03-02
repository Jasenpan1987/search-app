import { SEARCH_LOADING } from "../constants/types";

export default (state=false, action) => {
    if(action.type===SEARCH_LOADING){
        return action.payload;
    }else{
        return state;
    }
}