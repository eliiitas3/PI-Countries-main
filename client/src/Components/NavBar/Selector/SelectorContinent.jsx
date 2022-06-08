import React from "react";

export default function SelectCont(){
    return(
        <div>
            <select>
                <option>Continent</option>
                <option value='europe'>Europe</option>
                <option value='southA'>South America</option>
                <option value='northA'>North America</option>
                <option value='asia'>Asia</option>
                <option value='oceania'>Oceania</option>
                <option value='africa'>Africa</option>
                <option value='antar'>Antartic</option>
            </select>
        </div>
    )
}