import { get } from "lodash";
let defaultState = {
    fetching: false,
    status: false,
    error: {},
    list: {},
    action: false,
    loadmore: false,
    items: []
}
let State = {
    weather: defaultState,
    forcast: defaultState
}
function listReducer(state = State, action) {
    switch (action.type) {
        case "PRODUCT_LIST_PENDING": {
            console.log("pending")
            const { attribute } = action.meta;
            console.log('PRODUCT_LIST_PENDING', attribute)
            return {
                ...state,
                [attribute]: {
                    ...state[attribute],
                    action: action.meta.action,
                    fetching: true,
                }
            }
        }
        case "PRODUCT_LIST_REJECTED": {
            const { attribute } = action.meta;
            console.log('PRODUCT_LIST_REJECTED', attribute, get(action.payload, "response.data", ""))
            return {
                ...state,
                [attribute]: {
                    ...state[attribute],
                    fetching: false,
                    error: get(action.payload, "response.data", ""),
                }
            }
        }
        case "PRODUCT_LIST_FULFILLED": {
            const { attribute } = action.meta;
            const data = get(action, 'payload.data', {});
            const d = data;
            const items = get(action, 'payload.data.items', {});
            console.log('PRODUCT_LIST_FULFILLED', attribute)
            return {
                ...state,
                [attribute]: {
                    ...state[attribute],
                    fetching: false,
                    list: d,
                    items: items,
                    error: get(data, 'Errors', {}),
                    status: get(data, 'Success'),
                    action: action.meta.action,
                }
            }
        }
        default:
            return state;
    }
}
export default listReducer;