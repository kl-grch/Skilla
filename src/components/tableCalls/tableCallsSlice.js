import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    audio: [],

};

const tableCallsSlice = createSlice({
    name: 'tableCalls',
    initialState,
    reducers: {
        getAudio: (state, action) => {
            state.audio = action.payload;
        }
    }
});

const {actions, reducer} = tableCallsSlice;

export default reducer;

export const {getAudio} = actions;