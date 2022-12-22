import "./MiddleHeader.css"
import { useEffect, useState } from "react"
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaBalanceScaleLeft} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {SlBasket} from 'react-icons/sl'
function MiddleHeader(){
    const [nav,setNav] = useState(false)
    const onChangeBack=()=>{
        if(window.scrollY>66){
         setNav(true)
        }
        else {
            setNav(false)
        }
    }
    useEffect(()=>{
        onChangeBack()
        window.addEventListener("scroll",onChangeBack)
    })
    return (
        <div className={`middle-header-cont ${nav && 'middle-header-sticky'}`}>
            <img src="https://goodzone.uz/logogz_ru.svg" alt="" />
            <div className="middle-header-search">
                <input type="text" placeholder="Search"/>
                <button><BiSearch/></button>
            </div>
            <div className="middle-header-icons">
            <div>
            <AiOutlineHeart style={{Size:"26rem"}}/>
            <span>Sevimlelar</span>
           </div>
           <div>
            <FaBalanceScaleLeft style={{fontSize:"25px"}}/>
            <span>solishtirush</span>
           </div>
           <div>
            <SlBasket style={{fontSize:"25px"}}/>
            <span>Savatcha</span>
           </div>
           <div>
            <BiUser style={{fontSize:"25px"}}/>
            <span>kirish</span>
           </div>
            </div>
        </div>
    )

}

export default MiddleHeader