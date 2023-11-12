import React, { useEffect, useRef, useState } from "react";
import {motion}from 'framer-motion'
import './home.css'
import {arrImgages} from'./images'
import Socialmedia from "./Socialmedia";
export const Home=()=>{
    const[m,setm]=useState(0);

    const n=useRef();

    useEffect(()=>{
    setm(n.current.scrollWidth-n.current.offsetWidth)
    },[])


    return(
       <div className="home">
        <motion.div ref={n} 
 className="container">
            <motion.div className="inner" drag="x" dragConstraints={{right:-15,left:-m+15}} >
                {arrImgages.map((e)=>
                    (
                        <motion.div className="myphoto">
                            <img className="img" src={e} id="img" alt="img"/>
                        </motion.div>
                       
                    )
                )}
               
             </motion.div>
        </motion.div>

     
    <font className="name">
    

    </font>
    
    
  

<div className="socialMediaSection">
<Socialmedia className="social"/>

</div>


       </div>
    );
}