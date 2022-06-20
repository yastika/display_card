import React from "react"

export default function Info(){
    return (<div className="main-info">
                <div className="main-img"></div>
                <h1 className="my-name">Yastika Kumar</h1>
                <h4 className="designation">Technology Analyst</h4>
                <h6 className="email-id">yastikakumar.website</h6> 
                <div className="details">
                    <button className="email"><img className="icon-img" src = './images/Mail.png' alt="Email"/> Email </button>
                    <button className="linkedin"><img className="icon-img" src = './images/linkedin.png' alt = "Linkedin"/> LinkedIn</button>
                </div>              
    </div>)
}