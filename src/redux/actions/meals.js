import { ADD_MEAL, DELETE_MEAL } from '../action-types/meals';


export const addMeal = (data) => {
    
    return {
        type : ADD_MEAL,//action.type in reducer
        data,
    };
};

export const deleteMeal=(data)=>{
    return{
        type:DELETE_MEAL,
        data,
    }
}