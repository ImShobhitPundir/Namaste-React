import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
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