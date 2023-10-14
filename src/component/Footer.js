import React from 'react'
import "../css/Footer.css"
import { AiFillLinkedin } from "react-icons/ai";

import { AiFillGithub} from "react-icons/ai";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="foter">
    <div className="footer-content">
      <h3>welcome To my portfolio</h3>
      <p>
        Hello my name is Kshitij Kumar Saini, I hope you liked my portfolio.
      </p>
      <ul className="socials">
        
        
        <li>
          <a href="https://github.com/kshitijsaini2125">
          <AiFillGithub/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kshitij-kumar-saini-1a311a236/">
            <AiFillLinkedin/>
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-bottom">
      <p>
        copyright &copy;2021 <a href="#">Ak</a>{" "}
      </p>
    </div>
    <div className="footer-menu">
      <ul className="f-menu">
        <li>
        <Link to="/">
          <a href="">Home</a>
          </Link>
        </li>
        <li>
        <Link to = "/about">
          <a href="">About</a>
          </Link>
        </li>
        <li>
        <Link to ="/contact">
          <a href="">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Footer