import { createSlice, type PayloadAction } from "@reduxjs/toolkit"



type AuthState = {
    token: string | null
    isAuthenticated: boolean
};

const initialState: AuthState = {
        token: null,
        isAuthenticated: false
};


const userAccessToken = localStorage.getItem("accessToken");
if (userAccessToken != null) {
    initialState.isAuthenticated = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<AuthState>) {
            state.token = action.payload.token
            state.isAuthenticated =  true
            console.log('Setting accessToken in localStorage:', action.payload.token);
            if (action.payload.token) {
                localStorage.setItem("accessToken", action.payload.token);
            } else {
                localStorage.removeItem("accessToken");
            }
        },
        logout(state) {
            state.token = null,
            state.isAuthenticated = false
        }
    }
})

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;