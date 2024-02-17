import {createSlice} from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'stateData',
    initialState: {
        terms: null,
        images: null,
        accepted: false
    },
    reducers: {
        setTerms: (state, action) => {
            state.terms = action.payload;
        },
        termsAccepted: (state, action) => {
            state.accepted = action.payload;
        },
        setImages: (state, action) => {
            state.images = action.payload;
        },
    },
})

export const {setTerms, termsAccepted, setImages}
    = dataSlice.actions

export default dataSlice.reducer