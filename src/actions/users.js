import { types } from "../types/types";


export const addUsers = (info) => ({


    type: types.UserAdd,
    payload: info

})