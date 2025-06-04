import { createStore } from 'redux';
import reducer from './src/Reducer/reducer'; 

const store = createStore(reducer);

export default store;
