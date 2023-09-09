import { configureStore,createSlice } from "@reduxjs/toolkit";

const stepperSlice = createSlice({
    name:"stepper",
    initialState:{initialStep:2},
    reducers:{
        Next(state,action){
            ++state.initialStep
        },
        Back(state,action){
            --state.initialStep
        }
    }
})
export const actions = stepperSlice.actions;
export const store = configureStore({
    reducer: stepperSlice.reducer
})