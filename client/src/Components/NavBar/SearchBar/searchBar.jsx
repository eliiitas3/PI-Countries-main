import React from "react";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { searchCountry } from "../../../Reducer/action";




export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleInput(e){
        e.preventDefault();
        setName('');
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchCountry(name));
        setName('')
        
    }

    return (
        <div>
            <input type='text' value={name} onChange={e=>handleInput(e)} placeholder="Search country"/>
            <button type="submit" onClick={e=>handleSubmit(e)}>search</button>
        </div>
    )
}