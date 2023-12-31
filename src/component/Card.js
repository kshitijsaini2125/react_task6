import "../css/Card.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const Card = () => {
  return (
    <div className="cards">
        <h1 className="card-heading">My Projects</h1>
        <div className="container">
            <div className="cardd-1">
                <img src="/img/Group 1.png" alt="image"/>
                <h2 className="project-title">project 1</h2>
                <div className="project-details">
                    <p>This is my 1st project </p>
                    <div className="pro-btn">
                        <NavLink to="xyz.com"
                        className="btnn">View</NavLink>
                    </div>
                </div>   
            </div>
            <div className="cardd-2">
                <img src="/img/one-piece.gif" alt="image"/>
                <h2 className="project-title">one-piece-merchandise</h2>
                <div className="project-details">
                    <p>Welcome one piece fans here you can find all one piece merch. </p>
                    <div className="pro-btn">
                        <NavLink to="yxz.com"
                        className="btnn">View</NavLink>
                    </div>
                </div>      
            </div>
        </div>
    </div>
  )
}

export default Card