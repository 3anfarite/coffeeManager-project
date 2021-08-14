import { combineReducers, createStore } from "@reduxjs/toolkit";
import { mealReducer } from '../reducers/meals';



const reducer = combineReducers({
    meals : mealReducer,
})

const initialState = {};
const store = createStore(reducer, initialState)

export default store;
