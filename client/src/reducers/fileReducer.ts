import {InferActionsTypes} from "./index";
import {actions} from "./userReducer";

const initialState = {

};

const fileReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state
    }
}

export default fileReducer;
//TYPES
type ActionsType = InferActionsTypes<typeof actions>
type InitialStateType = typeof initialState;