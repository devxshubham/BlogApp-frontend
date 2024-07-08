import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './appStore'

interface UserTypes {
    name: string | null,
    username: string | null,
    email : string | null,
    id : string | null
}

let initialState: UserTypes = {
    name : null,
    username : null,
    email : null,
    id : null
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserTypes>) => {
            state.name = action.payload.name
            state.username = action.payload.username
            state.email = action.payload.email
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.name = null,
            state.username = null
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state

export default userSlice.reducer;
