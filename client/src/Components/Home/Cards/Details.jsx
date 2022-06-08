import {React , useEffect} from "react";
// import { useState } from "react/cjs/react.production.min";
import { Link, useParams } from "react-router-dom";
import { Details } from "../../../Reducer/action"; 
import { useSelector , useDispatch} from "react-redux";


export default function CountryDetails(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const detal = useSelector((state)=>state.detail)



    useEffect(()=>{
        dispatch(Details(id))
    },[])
    return(
        <div>
            <Link to='/countries'><button>Back</button></Link>
            <h1>{detal.name}</h1>
            <img src={detal.flag}/>
            <p>{detal.idL}</p>
            <p>Capital: {detal.capital}</p>
            <p>SubRegion: {detal.subregion}</p>
            <p>Area: {detal.area} km²</p>
            <p>Population: {detal.population}</p>
            <p>{detal.activity}</p>
        </div>
    )
}