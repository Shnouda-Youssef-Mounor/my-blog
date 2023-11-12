import React from "react";
import './portfolio.css'
import Projects from "./projects";
import { Link } from "react-router-dom";
export const Protfolio=()=>{
    const displayProject=Projects.map((project)=>{
        return (
            <div className="project" key={project.id}>
                <font className='titleProject'>{project.title}</font>
                <div className="containerIMG">
                <img src={project.image} alt="" className="imgProject" />
                </div>
                <label>{project.group}</label>
                <p className="descriptionProject">{project.description}</p>
                <div className="btnProject">
                    <Link className="btn btn-danger" to={project.urlVisit} target="_blank" rel="nooponer">Visit</Link>
                    <Link className="btn btn-Preview" to={project.urlCode} target="_blank" rel="nooponer">Code</Link>
                </div>
            </div>
        )
    })
    return(
        <div className="pagePortfolio">
            <div className="portfolio">
                {displayProject}
            </div>
        </div>
      
    );
}