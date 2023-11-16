import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: true
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,

    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});

export const authActions = authSlice.actions;

//we can export only the reducer here, doesn't need the rest
export default authSlice.reducer;