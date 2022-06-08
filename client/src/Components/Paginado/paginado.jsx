import React from "react";

export default function Paginado({countrysPerPage,countries,paginado}){
    const pageNumbers = []

    for (let i=0; i <= Math.ceil(countries/countrysPerPage) ; i++){
        pageNumbers.push(i)
    }
    
    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number =>{
                    return(
                    <button>
                    <a onClick={()=>paginado(number)}>{number}</a>
                    </button>
                    )
                })}
            </ul>
        </nav>
    )
}