import api from './api';

export function homefun(attribute) {
    return dispatch => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: api.get("/live/"),
            meta: { attribute }
        });
    };

}
export function forcast(attribute) {
    return dispatch => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: api.get("/forecast"),
            meta: { attribute }
        });
    };

}



