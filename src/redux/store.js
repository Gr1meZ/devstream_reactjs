import {configureStore} from '@reduxjs/toolkit'
import dataReducers from './slices/dataSlice'

export default configureStore({
    reducer: {
        stateData: dataReducers,
    },
})