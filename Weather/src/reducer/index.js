import { combineReducers } from "redux";

import listReducer from "./listReducer";



const reducer = combineReducers({
    list: listReducer,
});


const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return reducer(undefined, action);
    }
    return reducer(state, action);
}

export default rootReducer;
