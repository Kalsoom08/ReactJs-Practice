import {FETCH, SUCCESS, ERROR} from '../Action/action';

const initialState= {
    loading : false,
    products: [],
    error: null
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case FETCH:
            return {...state, loading: true, error : null }
        case SUCCESS:
            return {...state, loading : false , products: action.payload, error: null}
        case ERROR:
            return {...state, loading : false, error : action.error}
        default:
            return state
    }
}

export default reducer;