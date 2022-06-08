import {GET_COUNTRY,
        COUNTRY_URL,
        ON_SEARCH,
        DETAILS,
        GET_DETAIL,
    } from "../Components/Constatants/Constants";


export function getAllCountries(){
    return function(dispatch){
        return fetch(COUNTRY_URL)
        .then(response=>response.json())
        .then(res=>{
            dispatch({type: GET_COUNTRY,
            payload:res
        })
        })
    }
}
// export function getAllCountries(){
//     return function(dispatch){
//         return fetch(COUNTRY_URL)
//         .then(response=>response.json())
//         .then(res=>{
//             dispatch({
//             type: GET_COUNTRY,
//             payload:res
//         })})    
//     }
// }

export function searchCountry(payload){
    return function(dispatch){
        return fetch(ON_SEARCH + payload)
        .then(response =>response.json())
        .then(res=>{
            dispatch({
            type: ON_SEARCH,
            payload:res
        })})            
        }
    }

export function Details(id){
    return function(dispatch){
        return fetch(DETAILS + id)
        .then(response =>response.json())
        .then(res=>{
            dispatch({
                type: GET_DETAIL,
                payload:res 
            })
        })    }
}


// export function filterbyAlf(payload){
//     return{
//         type:'FILTER_BY_ALF',
//         payload
//     }
// }

