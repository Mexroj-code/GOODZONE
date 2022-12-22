import React from "react";
import './RightButton.css';
import {BiShoppingBag} from 'react-icons/bi';
import { useState } from "react";
function RightShop({right=false}){
  
    return (
        <div className={` right-shop-box ${right &&'right-shop-box-true'}`}>
               
        </div>
    )
}
export default function RightButton(){
    const [right,setRight] = useState(false)
  
    
    const changeRight=()=>{
        setRight(!right)
    }
    return(<>
        <div className="right-button-box" onClick={changeRight}>
            <div >       
                <BiShoppingBag/><span>1 wt</span>
            </div>
            <button className="button">400 000 sum</button>
        </div>
        <RightShop right={right}/>
        </>

    )
}