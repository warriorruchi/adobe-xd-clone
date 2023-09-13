import React, { useState } from "react";
import Card from "../Card/Card"
import './Form.css';

function Form() {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [apiError, setApiError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailreg = /^(?!.*@ez\.works$)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        setIsValidEmail(emailreg.test(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('');

        // Frontend Validation
        if(isValidEmail){
            setApiError(null);
        }else{
            setApiError("Please Enter the vaild email id..")
            setSuccessMessage("")
        }

        fetch("http://3.228.97.110:9000/api", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({email:email})  
        })
        .then((response) => response.json())
        .then((res) => {

            // Backend Validation
            if(res.success){
                setSuccessMessage("Form Submitted");
                setApiError(null)
            }else{
                setSuccessMessage("")
                setApiError("Please Enter the vaild email id..")
            }
        })
        .catch((error) => {

            //Error handling
            setSuccessMessage("")
            setApiError("An error occurred while submitting the form.");
        });
    };

    const imageUrl = 'image/Image1.png'
    const Url = 'image/Image2.png';
    const imageUrl1 = 'image/Image3.png';
    const imageUrl2 = 'image/Image4.png';
    const imageUrl3 = 'image/Image5.png';
    const imageUrl4 = 'image/Image6.png';

    return (
        <>
            <div className="container">
                <div className="leftbox">
                    <img src="https://access.ez.works/EZ_Works_logo.png" alt="logo" height="145px" width="517px" />
                    <h2 style={{ font: "normal normal normal 48px/58px Exo 2.0", letterSpacing: "0px", color: "#112949" }}>Suite Of Business Support Services</h2>

                    <p style={{ letterSpacing: "0px", font: "normal normal normal 32px/38px Exo 2.0", color: "#112949", textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    </p>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="formcontainer">
                                <div className="showingerror">
                                    <div >
                                        <label><input type="Email" placeholder="Email Address" value={email} onChange={handleEmailChange} className="input" /></label>
                                    </div>
                                    <div>
                                        {!isValidEmail && (
                                            <p style={{ color: "red", fontSize: "15px" }}>{ }</p>
                                        )}

                                        {apiError && <p style={{ color: "red", fontSize: "15px" }}>{apiError}</p>}
                                        {successMessage && (
                                            <p style={{ color: "green", margin: "5px 0", fontSize: "15px" }}>{successMessage}</p>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="button">Contact Me</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cartcontainer" >

                    <Card heading="Presentation Design" Url={imageUrl} />
                    <Card heading="Audio-Visual Production" Url={Url} />
                    <Card heading="Transiation Services" Url={imageUrl1} />


                    <Card heading="Graphic Design" Url={imageUrl2} />
                    <Card heading="Research & Analytics" Url={imageUrl3} />
                    <Card heading="Data Processing" Url={imageUrl4} />

                </div>

            </div>
        </>
    )
}

export default Form;