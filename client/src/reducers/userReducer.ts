import {InferActionsTypes} from "./index";

const initialState = {
    currentUser: null as UserType | null,
    isAuth: false
};

const userReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case "LOGOUT":
            return {
                ...state,
                currentUser: null,
                isAuth: false
            }
        default:
            return state;
    }
}

export const actions = {
    getIsAuth: () => ({type: "AUTH/GET_IS_AUTH"} as const),
    setUser: (user: UserType) => ({type: "SET_USER", payload: {user}} as const),
    logout: () => ({type: "LOGOUT"} as const)
}

export default userReducer;
//TYPES

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
export type UserType = {
    email: string,
    id: string
}