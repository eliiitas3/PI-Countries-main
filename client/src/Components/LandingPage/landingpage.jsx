import React from "react";
import { Link } from "react-router-dom";


export default function LandingPage(){
    return(<div>
        <h1>You want to know the world ?</h1>
        <Link to='/countries'>
        <button>Let's go</button>
        </Link>
    </div>)
}