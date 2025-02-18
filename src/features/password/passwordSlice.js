import { createSlice } from '@reduxjs/toolkit';

const passwordSlice = createSlice({
    name: 'password',
    initialState: [],
    reducers: {
        addPassword: (state, action) => {
            state.push(action.payload);
        },
        deletePassword: (state, action) => {
            return state.filter((pass) => pass.id !== action.payload);
        },
    },
});

export const { addPassword, deletePassword } = passwordSlice.actions;
export default passwordSlice.reducer;