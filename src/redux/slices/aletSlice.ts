import {createSlice} from "@reduxjs/toolkit";

interface AlertState {
  show: boolean
}

const initialState: AlertState = {
  show: false
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers:{
    toggleAlert: (state) => {
      state.show = !state.show
    }
  }
})


export const {toggleAlert} = alertSlice.actions;
export default alertSlice.reducer

