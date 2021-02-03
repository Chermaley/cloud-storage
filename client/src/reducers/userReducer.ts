import {InferActionsTypes} from "./index";

const initialState = {
    currentUser: {},
    isAuth: false
};

const userReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const actions = {
    getIsAuth: () => ({type: "AUTH/GET_IS_AUTH"} as const)
}

export default userReducer;
//TYPES

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>