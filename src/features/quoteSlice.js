import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	value: null
}

const quoteSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {
		getQuote: (state, action) => {
			state.value = action.payload;
		}
	}
})

export const { getQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
