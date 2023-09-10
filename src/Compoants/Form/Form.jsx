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
    const imageUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3OfG73HP_QBNo3hpuERt870KvlhvJJQezQ&usqp=CAU`;
    const Url = `https://th.bing.com/th/id/OIP.yEQK5p1fhs50Om6Au6G8jgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`;
    const imageUrl1=`https://th.bing.com/th/id/OIP.DYDLkgiYNcG6SgUKjSTtmQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7`;
    const imageUrl2=`https://th.bing.com/th/id/OIP.J0rRo8iQMF8T37kQ-dHzggHaCv?w=327&h=129&c=7&r=0&o=5&dpr=1.3&pid=1.7`;
    const imageUrl3=`https://th.bing.com/th/id/OIP.0xwk9OLSJ4MZ9uxkETmPjAHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7`;
    const imageUrl4=`https://th.bing.com/th/id/OIP.L6kr5wmTnZXI3vSbl4OzqAHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7`;

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
                                <div className="showingerror">
                                <div >
                                    <label><input type="Email" placeholder="Email Address" value={email} onChange={handleEmailChange} className="input" /></label>
                                </div>
                                <div>
                                    {submitted && !isValidEmail && (
                                        <p style={{ color: "red",fontSize:"15px"}}>Please enter a valid email address.</p>
                                    )}
                                    {apiError && <p style={{ color: "red",fontSize:"15px" }}>{apiError}</p>}
                                    {successMessage && (
                                        <p style={{ color: "green", margin: "5px 0", fontSize:"15px"}}>{successMessage}</p>
                                    )}
                                </div>
                                </div>
                                <button type="submit" className="button">Contact Me</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cartcontainer" >
                    <div className="part1">
                        <Card heading="Presentation Design" Url={imageUrl} />
                        <Card heading="Audio-Visual Production" Url={Url} />
                        <Card heading="Transiation Services" Url={imageUrl1} />
                    </div>
                    <div className="part2">
                        <Card heading="Graphic Design" Url={imageUrl2} />
                        <Card heading="Research & Analytics" Url={imageUrl3} />
                        <Card heading="Data Processing" Url={imageUrl4}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Form;