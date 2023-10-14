import "../css/Landing.css"
  import React from 'react'
import { Link } from "react-router-dom"
  
  const landing = () => {
    return (
      <div className="landing">
        <div className="mask">
        <img className="background-img" src="/img/tokenstreet-vbPk2tB2HrU-unsplash.jpg" alt="img"/>
        </div>
        <div className="content">
            <p>Hello I am Kshitij Kumar Saini </p>
            <h1> Mern development Enthusiast. </h1>
            <div>
                <Link to="/project" className="btnn">Project</Link>
            </div>
        </div>
      </div>
    )
  }
   
  export default landing