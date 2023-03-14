import React from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './comp.css'


export default function Menu(){
    return(
        <>
        
        <div className="container-fluid col-4 m1">
        <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active m1" href="#"><Link to={'/android'}>Android</Link></a>
            
        </li>
        <li class="nav-item">
            <a class="nav-link  active m1" href="#"><Link to={'/ios'}>ios</Link></a>
            
        </li>
        <li class="nav-item">
            <a class="nav-link  active m1" href="#"><Link to={'/php'}>PHP</Link></a>
            
        </li>
        <li class="nav-item">
            <a class="nav-link active m1"><Link to={'/ror'}>ROR</Link></a>
           
        </li>
        </ul>
        </div>
        </>
    );
}