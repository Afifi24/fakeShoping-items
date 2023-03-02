import { ActionTypes } from "../contants/action-types";

const initState ={
    products:[]
}

export const productReducer = (state=initState,{type,payload})=>{
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {
            ...state,products:payload
        }
    default:
        return state
}
}
export const selectedProductReducer = (state={},{type,payload})=>{
switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
        return {
            ...state,...payload
        }
    case ActionTypes. REMOVE_SELECTED_PRODUCT:
        return {}
    default:
        return state
}
}