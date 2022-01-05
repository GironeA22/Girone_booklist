import {createSlice} from '@reduxjs/toolkit';
import Booklist from '../Components/Booklist';

let booklist = []

let storedBooklist = JSON.parse(localStorage.getItem('storedBooklist'));
storedBooklist ? booklist = storedBooklist : booklist = Booklist

export const booklistSlice = createSlice({
    name: 'booklist',
    initialState: {
        booklist: booklist
    },
    reducers: {
        addBooks: (state, action) => {
            state.booklist = action.payload
            localStorage.setItem('storedBooklist', JSON.stringify(state.booklist));
        },
    }
})

export const { addBooks } = booklistSlice.actions;
export const selectBooklist = (state) => state.booklist.booklist;
export default booklistSlice.reducer;