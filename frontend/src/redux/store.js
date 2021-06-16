import react from 'react';
import {createStore} from 'redux';
import reducer from './reducer/reducer';

const initialStore = {
    count: 0,
    total: 0,
    cart: [],
    user: {}
}

const store = createStore(reducer, initialStore);

export default store; 
