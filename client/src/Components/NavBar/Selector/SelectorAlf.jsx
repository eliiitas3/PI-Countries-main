import React from "react";
import { filterbyAlf } from "../../../Reducer/action";
import { useDispatch } from "react-redux";

const dispatch = useDispatch

// function handleOrder(e){
//     e.preventD   efault();
//     dispatch(filterbyAlf(e.target.value))
//     setOrder(`Ordered ${e.target.value}`)

// }


export default function SelectorAlf(){
    return(
        <div>
            <select onChange={(e)=>handlerOrder(e)}>
            <option>By:alfa</option>
            <option value='ascendente'>Az</option>
            <option value='descendente'>Za</option>
            </select>
        </div>
    )
}

