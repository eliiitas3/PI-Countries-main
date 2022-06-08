import React from "react";
import SearchBar from "./SearchBar/searchBar";
import SelectAct from "./Selector/SelectorActivity";
import SelectorAlf from "./Selector/SelectorAlf";
import SelectPob from "./Selector/SelectorPoblation";
import SelectCont from "./Selector/SelectorContinent";
import {Link} from "react-router-dom";


export default function navBar(){
    return(
        <div>
            <Link to='/create'>
            <button>Create Activity</button>
            </Link>
            <SelectAct/>
            <SelectorAlf/>
            <SelectPob/>
            <SelectCont/>
            <SearchBar/>
        </div>
    )
}