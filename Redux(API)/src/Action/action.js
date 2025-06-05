import axios from 'axios';

export const FETCH = 'FetchRequest';
export const SUCCESS = 'FetchSuccess';
export const ERROR = 'FetchError';

export const fetchAPI = ()=>{
return async (dispatch) =>{
    dispatch({type : FETCH}) 

try {
    const {data} = await axios.get('https://dummyjson.com/products')
    dispatch({type : SUCCESS, payload : data.products})
} catch (error) {
    dispatch({type : ERROR, error : error.message})
}}}

