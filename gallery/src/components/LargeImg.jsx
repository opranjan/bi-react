import React, {Component} from 'react';
import '../App.css'


const LargeImg =(props)=>{
    return(
        <div className="lg-img-hldr">
            <div className="top-bar">
                <a href="#"><img onClick={props.closeButton} className="close-icon" src="../img/icon1.png" alt=""/></a>
            </div>
            <img src={props.src} alt=""/> 
            <div className="bottom-bar">
                    <h3 className="title">{props.title}</h3>
                    <div className="descriptions">
                        {props.details}
                        {/* <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, quasi?</div> */}
                    </div>
                    
            </div>
        </div>
    );
}


export default LargeImg;