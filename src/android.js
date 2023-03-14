import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './comp.css';
import mp from './pic/mp.jpg';
import p1 from './pic/p1.jpg';
import red from './pic/red.png';
import KVB from './pic/KVB.jpg';
import { BsArrowRight, BsFonts, IconName } from "react-icons/bs";


export default function Android(){
    return(
        <>
        <div className="container-fluid row bg-secondary">
            <div className="conatainer col-12">
                <div className="col-12 m-3">
                    <h1>Mobile Apps</h1>
                </div>
            </div>
           <div className="container-fluid col-4 m2 p-5 m-5">
                <img className="container-fluid" src={mp}/>
            </div> 
            <div className="container-fluid col-4 mt-5">
                <p>Mobile Apps, Web Apps</p>
                <h1>Gist</h1>
                <h1 className="a1"><BsArrowRight/></h1>
            </div> 
            <div className="container-fluid col-4 mt-5">
                <p>Mobile Apps, Web Apps</p>
                <h1>Fleet Rover</h1>
                <h1 className="a1"><BsArrowRight/></h1>
            </div> 
            <div className="container-fluid col-4 m3 p-5 m-5">
                <img className="container-fluid" src={p1}/>
            </div> 
            <div className="container-fluid col-4 m2 p-5 m-5 bg-warning">
                <img className="container-fluid" src={red}/>
            </div> 
            <div className="container-fluid col-4 mt-5">
                <p>Mobile Apps, Web Apps</p>
                <h1>Red Taxi</h1>
                <h1 className="a1"><BsArrowRight/></h1>
            </div> 
            <div className="container-fluid col-4 mt-5">
                <p>Mobile Apps, Web Apps</p>
                <h1>KVB Banking</h1>
                <h1 className="a1"><BsArrowRight/></h1>
            </div> 
            <div className="container-fluid col-4 m3 p-5 m-5 bg-success">
                <img className="container-fluid" src={KVB}/>
            </div>
        </div>
        </>
    );
}