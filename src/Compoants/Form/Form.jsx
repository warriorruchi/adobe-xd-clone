import React, { useState } from "react";
import Card from "../Card/Card"
import axios from "axios";
import './Form.css';


function Form() {

    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Validate the email using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (isValidEmail) {
            // Make an Axios POST request to your API
            axios
                .post("http://3.228.97.110:9000/api", { email })
                .then((response) => {
                    // Handle successful API response
                    console.log("API response:", response.data);
                    // Display success message
                    setApiError(null); // Clear any previous error
                    // alert("Form Submitted");
                    setSuccessMessage("Form submitted successfully.");
                })
                .catch((error) => {
                    // Handle API error response
                    console.error("API error:", error);
                    // Display the API error message
                    setApiError("Please Enter the vaild email id..");
                });
        }
    };

    return (
        <>
            <div className="container">
                <div className="leftbox">
                    <img src="https://access.ez.works/EZ_Works_logo.png" alt="logo" height="150px" width="350px" />
                    <h2 >Suite Of Business Support Services</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..
                    nulla ut totam quidem, aspernatur et similique asperiores, culpa reprehenderit. Reiciendis?
                         </p>
                     
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="formcontainer">
                            <div >
                            <label><input type="Email" placeholder="Email Address" value={email} onChange={handleEmailChange} className="input"/></label>
                            </div>
                            <div>
                            {submitted && !isValidEmail && (
                                <p style={{ color: "red" }}>Please enter a valid email address.</p>
                            )}
                            {apiError && <p style={{ color: "red" }}>{apiError}</p>}
                            {successMessage && (
                                <p style={{ color: "green", margin: "5px 0" }}>{successMessage}</p>
                            )}
                            </div>
                            <button type="submit" className="button">Contact Me</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cartcontainer" >
                    <div className="part1">
                        <Card heading="graphic Design" img=""/>
                        <Card />
                        <Card />
                    </div>
                    <div className="part2">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Form;