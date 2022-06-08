import {React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Reducer/action";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/navBar";
import Paginado from "../Paginado/paginado";
import Card from "./Cards/Card";

export default function Home(){
    
    const dispatch = useDispatch()
    const countries = useSelector((state)=>state.country)
    console.log(countries,"countriess")
    const [currentPage, setCurrentpage] = useState(1)
    const [countrysPerPage, setCountrysPerPage]= useState(10)
    const indexOfLastCountry = currentPage * countrysPerPage
    const indexOfFirstCountry = indexOfLastCountry - countrysPerPage
    const currentCountry = countries?.slice(indexOfFirstCountry ,indexOfLastCountry)
    const paginado = (pageNumber) =>{
        setCurrentpage(pageNumber)
    }


    useEffect(()=>{
        dispatch(getAllCountries())
    },[]
    )
    return (
        <div>
            <NavBar/>
            <h1>All countries in the world </h1>
            <div>
                <span>
                {currentCountry?.map((e)=>{
                    return(
                        <Link to={`/countries/${e.idL}`}>
                            <Card name={e.name} continent={e.continent} flag={e.flag} key ={e.id}/>
                        </Link>
                    )
                })}
            </span>
            <Paginado countrysPerPage={countrysPerPage} countries={countries.length} paginado={paginado}/>
            </div>
        </div>
    )
} 
