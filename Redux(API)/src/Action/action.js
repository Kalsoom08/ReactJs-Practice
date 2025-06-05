import axios from 'axios';

export const FETCH = 'RequestFetch'
export const SUCCESS = 'RequestSuccess'
export const ERROR = 'RequestError'

export const fetchAPI = async (dispatch) =>{
dispatch({type : FETCH})
 const response = await axios.get('https://dummyjson.com/products')
try {
    dispatch({type : SUCCESS, payload : response.products})
} catch (error) {
    dispatch({type: ERROR, error : error.message})
}
}