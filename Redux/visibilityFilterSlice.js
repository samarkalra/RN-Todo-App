import { createSlice } from '@reduxjs/toolkit';

export const visibilityFilterSlice = createSlice({
    name: 'visibilityFilter',
    initialState: {
        filter: 'ALL'
    },
    reducers: {
        setVisibilityFilter: (state, action) => {
            state.filter = action.payload.filter
        }
    }
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;