import React, { useState } from "react";
import './slidbar.css'
import { Link } from "react-scroll";

import home from '../Assets/Slidebar/home.png'
import about from '../Assets/Slidebar/about.png'
import contact from '../Assets/Slidebar/contact-us.png'
import portfolio from '../Assets/Slidebar/portfolio.png'
import resume from '../Assets/Slidebar/resume.png'
import skills from '../Assets/Slidebar/skills.png'

export const Slidebar=()=>{
    const [showHome,setshowHome]=useState({opacity:"0",})
    const [showSkills,setshowSkills]=useState({opacity:"0"})
    const [showAbout,setshowAbout]=useState({opacity:"0"})
    const [showResume,setshowResume]=useState({opacity:"0"})
    const [showPortfolio,setshowPortfolio]=useState({opacity:"0"})
    const [showContactUs,setshowContactUs]=useState({opacity:"0"})
    const [showFooter,setshowFooter]=useState({opacity:"0"})


const [state ,setstate]=useState({display:"block"});

const showlinkhome=()=>{
    
    if(showHome.opacity==="0"){
        if(showSkills.opacity==="1"||showAbout.opacity==="1"||showResume.opacity==="1"||showPortfolio.opacity==="1"||showContactUs.opacity==="1"){
            setshowSkills({opacity:"0"})
            setshowAbout({opacity:"0"})
            setshowResume({opacity:"0"})
            setshowPortfolio({opacity:"0"})
            setshowContactUs({opacity:"0"})
        }
        setshowHome({opacity:"1"})
    }
    
    else{
        setshowHome({opacity:"0"})
  
    }
    return showHome

}
const showlinkskills=()=>{
    
    if(showSkills.opacity==="0"){
        if(showHome.opacity==="1"||showAbout.opacity==="1"||showResume.opacity==="1"||showPortfolio.opacity==="1"||showContactUs.opacity==="1"){
            setshowHome({opacity:"0"})
            setshowAbout({opacity:"0"})
            setshowResume({opacity:"0"})
            setshowPortfolio({opacity:"0"})
            setshowContactUs({opacity:"0"})
        }
        setshowSkills({opacity:"1"})
    }
    
    else{
        setshowSkills({opacity:"0"})
  
    }
    return showSkills

}

const showlinkabout=()=>{
    
    if(showAbout.opacity==="0"){
        if(showSkills.opacity==="1"||showHome.opacity==="1"||showResume.opacity==="1"||showPortfolio.opacity==="1"||showContactUs.opacity==="1"){
            setshowHome({opacity:"0"})
            setshowSkills({opacity:"0"})
            setshowResume({opacity:"0"})
            setshowPortfolio({opacity:"0"})
            setshowContactUs({opacity:"0"})
        }
        setshowAbout({opacity:"1"})
    }
    
    else{
        setshowAbout({opacity:"0"})
  
    }
    return showAbout

}
const showlinkresume=()=>{
    
    if(showResume.opacity==="0"){
        if(showHome.opacity==="1"||showSkills.opacity==="1"||showAbout.opacity==="1"||showPortfolio.opacity==="1"||showContactUs.opacity==="1"){
            setshowHome({opacity:"0"})
            setshowSkills({opacity:"0"})
            setshowAbout({opacity:"0"})
            setshowPortfolio({opacity:"0"})
            setshowContactUs({opacity:"0"})
        }
        setshowResume({opacity:"1"})
    }
    
    else{
        setshowResume({opacity:"0"})
  
    }
    return showResume

}
const showlinkportfolio=()=>{
    
    if(showPortfolio.opacity==="0"){
        if(showHome.opacity==="1"||showSkills.opacity==="1"||showAbout.opacity==="1"||showResume.opacity==="1"||showContactUs.opacity==="1"){
            setshowHome({opacity:"0"})
            setshowSkills({opacity:"0"})
            setshowAbout({opacity:"0"})
            setshowResume({opacity:"0"})
            setshowContactUs({opacity:"0"})
        }
        setshowPortfolio({opacity:"1"})
    }
    
    else{
        setshowPortfolio({opacity:"0"})
  
    }
    return showPortfolio

}
const showlinkcontactus=()=>{
    
    if(showContactUs.opacity==="0"){
        if(showHome.opacity==="1"||showSkills.opacity==="1"||showAbout.opacity==="1"||showResume.opacity==="1"||showPortfolio.opacity==="1"){
            setshowHome({opacity:"0"})
            setshowSkills({opacity:"0"})
            setshowAbout({opacity:"0"})
            setshowResume({opacity:"0"})
            setshowPortfolio({opacity:"0"})
        }
        setshowContactUs({opacity:"1"})
    }
    
    else{
        setshowContactUs({opacity:"0"})
  
    }
    return showContactUs

}
const show=()=>{
    if(state.display==="block"){
        setstate({display:"none",transitionDuration:"1s"})
        setshowFooter({opacity:"1",transitionDuration:"1s"})

    }
    else{
        setstate({display:"block"})
        setshowFooter({opacity:"0",transitionDuration:"1s"})
    }
    return state
}
    return (
        <div className="navbar">
            <button className='title' onClick={show}>S.</button>
            <div >
                <ul className="list" >

                    <li className="item" style={state}>

                        <Link to="Home" activeClass="active" className="homeLink" spy={true} smooth={true} offset={-100} duration={500} >
                            <img src={home} className="icon" alt="icon_home" onClick={showlinkhome} />
                            <label className="nameHome" style={showHome}>Home</label>

                        </Link>
                    </li>
                    <li className="item " style={state}>

                        <Link to="Skills" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
                            <img src={skills} className="icon" alt="icon_home" onClick={showlinkskills} />
                            <label className="nameSkills" style={showSkills}>Skills</label>

                        </Link>

                    </li>
                    <li className="item " style={state}>
                        <Link to="About" activeClass="active" spy={true} smooth={true} onClick={showlinkabout} offset={-100} duration={500}>
                            <img src={about} className="icon" alt="icon_home" />
                            <label className="nameAbout" style={showAbout}>About</label>

                        </Link>

                    </li>
                    <li className="item " style={state}>
                        <Link to="Resume" activeClass="active" spy={true} smooth={true} onClick={showlinkresume} offset={-100} duration={500}>
                            <img src={resume} className="icon" alt="icon_home" />
                            <label className="nameResume" style={showResume}>Resume</label>

                        </Link>
                    </li>

                    <li className="item " style={state}>
                        <Link to="Portfolio" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={showlinkportfolio} >

                            <img src={portfolio} className="icon" alt="icon_home" />
                            <label className="namePortfolio" style={showPortfolio}>Portfolio</label>

                        </Link>
                    </li>
                    <li className="item " style={state}>
                        <Link to="ContactUs" activeClass="active" spy={true} smooth={true} onClick={showlinkcontactus} offset={-100} duration={500}>

                            <img src={contact} className="icon" alt="icon_home" />
                            <label className="nameContactUs" style={showContactUs}>Contact Us</label>

                        </Link>
                    </li>
                    <li className="footer size" style={showFooter}>
                        @Copyrights-Shnouda

                    </li>
                </ul>

            </div>

        </div>
    );
}