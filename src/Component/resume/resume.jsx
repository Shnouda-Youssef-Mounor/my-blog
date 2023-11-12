import React from "react";
import './resume.css'
import imgmyresume from'../Assets/MyPhoto/1.jpg'
import urlDownload from '../Assets/ShnoudaYoussefMounir.pdf'
import { Link } from "react-router-dom";
export const Resume=()=>{
    
    const urlPreview = "https://drive.google.com/file/d/1R-EcBX-PdJAlMGF9FwKZS6-0jZQ8wfBD/view?usp=sharing"
    return(
        <div className="resume">
            
            <img src={imgmyresume} alt="imgmyresume"/>
            <div className="btnResume">
            <Link className="btn btn-danger" to={urlDownload} target="_blank" rel="nooponer" download>Download</Link>
            <Link className="btn btn-Preview" to={urlPreview} target="_blank" rel="nooponer">Preview</Link>     
            </div>
            
        </div>
    );
}