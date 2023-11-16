import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//prepare a slice of our global state, needs a name
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState, //can be written simply with modern JS -> initialState
    //"map" of all the reducers this state slice needs
    //every method here will automatically receive the latest state 
    //and these methods will be called for us (by redux) and receive the state
    //the methods will be called depending on which action was triggered
    // we are allowed to mutate the state here in the reducer (because of redux toolkit)
    reducers:{
        increment (state) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        },
        increase (state, action) {
            //action.payload -> l'action cree un action object comme suivant : { type: unique_identifier, payload: 10 }
            state.counter = state.counter + action.payload;
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

//we can export only the reducer here, doesn't need the rest
export default counterSlice.reducer;