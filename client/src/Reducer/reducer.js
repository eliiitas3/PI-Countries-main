import { GET_COUNTRY, ON_SEARCH ,GET_DETAIL } from "../Components/Constatants/Constants"

const initialState ={
    country: [],
    allCountries:[],
    detail:[],
}
const reducer = (state= initialState, action)=>{
    switch (action.type){
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
                allCountries: action.payload,
            }
        case ON_SEARCH:
            return {
                ...state,
                country: action.payload,
            }
        
        case GET_DETAIL:
            return{
                ...state,
                detail:action.payload
                
            }
        // case FILTER_BY_STATUS:
        //     const allCountries = state.allCountries
        //     const statusFiltred = action.payload    
        //     return{
        //         ...state,
        //         allCountries: statusFiltred
        //     }
        
        default:
            return{
                ...state
            }
    }
}


export default reducer