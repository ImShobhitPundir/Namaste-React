import { useState } from "react";
import Logo from "../assets/img/swiggy-logo1.png";
import { Link } from "react-router-dom";
// import { LOGO } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={Logo}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link> </li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
          
        </div>
        {
          isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          : <button onClick={() => setIsLoggedIn(true)}>Login</button>
        }
        
      </div>
    );
  };

  export default Header;