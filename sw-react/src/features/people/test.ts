/* NOTE: for reviewers: component is not in use. Written to test the development way */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authState = {
  logged: boolean,
}

const initialState: authState = {
  logged: false,
}

type LoginPayload = {id: number}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginIn(state, action: PayloadAction<LoginPayload>) {
      state.logged = action.payload.id > 10;
    },
  }
})

export const {
  loginIn
} = authSlice.actions;

export const auth = authSlice.reducer;
