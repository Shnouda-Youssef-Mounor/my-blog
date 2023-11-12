import React from "react";
import './about.css'
export const About=()=>{
    return(
        <div className="pageAbput">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className="personalInformation">
     I am Shnouda Youssef. I was born in Minya, Egypt in the year 2002. I am now studying at Minya University, Faculty of Computers and Information.
     </div>
    </div>
    <div className="carousel-item">
    <div className="personalInformation">
    I am studying in the Department of Systems and Information in my graduation year. I have a lot to offer in the field of web development     </div>
         </div>
    <div className="carousel-item">
      <div className="personalInformation">
      I have many skills and hobbies such as reading, communication, problem-solving and sports. I support Al-Ahly in Egypt and United in England

      </div>
    
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    );
}