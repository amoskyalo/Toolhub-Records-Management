import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FiSettings } from "react-icons/fi";
import { CiDark } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
// import { BiUserCircle } from 'react-icons/bi'
import Button from "react-bootstrap/Button";

const Header = () => {
  const [active, setActive] = useState(false);
  const [sticky, setSticky] = useState("");
  const [theme, setTheme] = useState(false);

  useEffect(()=>{
    if(theme){
      document.body.classList = 'black';
    }else{
      document.body.classList = '';
    };
  }, [theme]);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      return setSticky("#");
    } else {
      return setSticky("");
    }
  });

  return (
    <nav className={sticky === "#" ? `stickyNav` : ""}>
      <div className="nav-logo">
        <h2>Logo</h2>
      </div>
      <div className={`nav-links ${active ? `nav-links-toggle` : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
      <div className="nav-settings">
        <FiSettings className="icon" />
        <CiDark className="icon toggler" onClick={()=>setTheme(!theme)}/>
        <Button variant="primary" size="sm">
          Sign In
        </Button>
        <Button variant="primary" size="sm">
          Login
        </Button>
        {/* <BiUserCircle className='user icon'/> */}
        <AiOutlineMenu
          className="menu icon"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Header;
