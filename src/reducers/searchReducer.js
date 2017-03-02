import { SEARCH_SUCCESS, SEARCH_ERROR } from "../constants/types";

const initState = {
    data: "",
    status: "init"
};

export default (state=initState, action) =>{
    switch(action.type){
        case SEARCH_SUCCESS:
        const { data, status } = action.payload;
        return { data, status };

        case SEARCH_ERROR:
        return { data: "", status: action.payload.status };

        default:
        return state;
    }
}