import { useState } from "react";
import Logo from "../assets/img/swiggy-logo1.png";
import { Link } from "react-router-dom";
// import { LOGO } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className="flex justify-between bg-gray-100 shadow mb-4 px-5 ">
        <div className="">
          <img
            className="w-14"
            src={Logo}
          />
        </div>
        <div className="">
          <ul className="flex">
            <li className="m-4"><Link to='/'>Home</Link> </li>
            <li className="m-4"><Link to='/about'>About</Link> </li>
            <li className="m-4">Contact</li>
            <li className="m-4">Cart</li>
            <li className="m-4"><Link to='/instamart'>Instamart</Link> </li>

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