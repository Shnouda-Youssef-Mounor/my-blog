import React from "react";
import './skills.css'

import HTML from '../Assets/skills/html.png'
import CSS from '../Assets/skills/css.png'
import Bootstrap from '../Assets/skills/bootstrap.png'

import JS from '../Assets/skills/Js.png'
import ES6 from '../Assets/skills/ES6.png'
import TSX from '../Assets/skills/TS.png'

import REACTJS from '../Assets/skills/REACT.png'
import NEXTJS from '../Assets/skills/nextjs.jpg'
import REDUX from '../Assets/skills/redux.jpg'

import NET from '../Assets/skills/net.jpg'
import Csharp from '../Assets/skills/c.png'
import SQL from '../Assets/skills/SQL.png'

import CPP from '../Assets/skills/cpp.jpeg'
import JAVA from '../Assets/skills/java.jpg'
import PY from '../Assets/skills/python.png'

import oracle from '../Assets/skills/oracle.jpeg'
import mongodb from  '../Assets/skills/mongodb.png'
import postgresql from '../Assets/skills/postgresql.webp'


export const Skills=()=>{
    return(
     <div className="pageSkills">
     <div className="skills">
     
     <img src={HTML} alt="" className="skillsPhoto"/>
     <img src={CSS} alt="" className="skillsPhoto"/>
     <img src={Bootstrap} alt="" className="skillsPhoto"/>

     <img src={JS} alt="" className="skillsPhoto"/>
     <img src={ES6} alt="" className="skillsPhoto radiusBorder "/>
     <img src={TSX} alt="" className="skillsPhoto borderWhite radiusBorder"/>

     <img src={REACTJS} alt="" className="skillsPhoto bgWhite radiusBorder"/>
     <img src={NEXTJS} alt="" className="skillsPhoto borderWhite radiusBorder"/>
     <img src={REDUX} alt="" className="skillsPhoto borderWhite radiusBorder padding"/>

     <img src={Csharp} alt="" className="skillsPhoto"/>
     <img src={NET} alt="" className="skillsPhoto borderWhite radiusBorder"/>
     <img src={SQL} alt="" className="skillsPhoto bgWhite borderWhite radiusBorder"/>

     <img src={CPP} alt="" className="skillsPhoto radiusBorder"/>
     <img src={JAVA} alt="" className="skillsPhoto bgWhite borderWhite radiusBorder pdbt"/>
     <img src={PY} alt="" className="skillsPhoto borderWhite bgWhite radiusBorder pdbt"/>

     <img src={oracle} alt="" className="skillsPhoto borderWhite radiusBorder"/>
     <img src={mongodb} alt="" className="skillsPhoto borderWhite radiusBorder"/>
     <img src={postgresql} alt="" className="skillsPhoto borderWhite radiusBorder bgWhite"/>

 </div>

     </div>   
        
    );
}