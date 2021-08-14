import { ADD_MEAL } from './../action-types/meals';


const initialState = {
    mealList:[],
}

export const mealReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_MEAL: {
            return{
                ...state,
                mealList:[...state.mealList, action.data],
            }
        }
        default:
            return state;
    }
}