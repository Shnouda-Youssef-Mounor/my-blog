import React from "react";
import './contactus.css'
import imgContact from '../Assets/MyPhoto/2.jpg'
export const Contactus=()=>{
    return(
        <div className="contactPage">
        <img src={imgContact} alt="" className="imageContact"/>
        <form action="https://formsubmit.co/shnoudayoussef7@gmail.com" className="form" method="POST">
            <input type="text" name="name" id="name" className="form-control" placeholder="Full Name" required/>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"required/>
            <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" required/>
            <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" rows="3" placeholder="Message"required></textarea>
            <div className="btns">
                <input type="submit" value="Send" id="buttonSend"/>
                <input type="reset" value="Reset" id="buttonReset"/>
            </div>
        </form>
        </div>
    );
}