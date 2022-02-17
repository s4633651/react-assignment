import { createStore } from 'redux';

const initialState = { data:[] }

const reducerFunction = ( state = initialState, action )=>{

    console.log("redux action : ", action);

    return { ...state, data:action.payload }
};


const store = createStore(reducerFunction);

export default store;