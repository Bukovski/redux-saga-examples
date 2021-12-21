import UserActionType from "./user.type";

export const setUsers = payload => ({ type: UserActionType.SET_USERS, payload })
export const fetchUsers = () => ({ type: UserActionType.FETCH_USERS })