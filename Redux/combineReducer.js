import { combineReducers } from "redux";
import { DataReducer, Reducer } from "./Reducer";



export const rootReducer=combineReducers({
    list:DataReducer,
})