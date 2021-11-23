import React, { useEffect } from "react";
import "./Nav.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();


  const transitionNav =() =>{
      if(window.scrollY>100)
      {
          setShow(true);
      }
      else
      {
          setShow(false);
      }
  }

  useEffect(()=>{

    window.addEventListener("scroll", transitionNav)
    return () => window.removeEventListener("scroll", transitionNav);

  }, [])



  return (
    <div className={`nav ${show&&'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={()=>{navigate('/')}}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={()=>{navigate('/profile')}}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
