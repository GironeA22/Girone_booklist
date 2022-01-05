import {createSlice} from '@reduxjs/toolkit';
import Booklist from '../Components/Booklist';

export const booklistSlice = createSlice({
    name: 'booklist',
    initialState: {
        booklist: Booklist
    },
    reducers: {
        addBooks: (state, action) => {
            state.booklist.push({...action.payload})
            console.log(state.booklist)
        },
    }
})

export const { addBooks } = booklistSlice.actions;
export const selectBooklist = (state) => state.booklist.booklist;
export default booklistSlice.reducer;