import React from "react";
import ReactDOM from "react-dom/client";
/*
    Header Component:
        -Logo
        -Nav Items
    Body Component:
        -Search
        -Restaurant Container
            -Restaurant-card Component
    Footer: 
        -Links
        -copyrigh
        -address
        -contact

*/

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://play-lh.googleusercontent.com/4Lt7_4jeh0Nch0cataUnel9z5MJggHl0fM7VORtG91-EY6dMwo3SOsXL-JkQstiH1EMz"
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
    </div>
  );
};

const restaurantData = [
    {
        id: 1,
        name:'Swis Cake and Bakery',
        image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tgi7g9htx3f8gthex9ho',
        cuisine: 'Bakery, Desserts',
        rating: '4.0 Rating',
        time: '40 Mins'
    },
    {
        id: 2,
        name:'Burger Point',
        image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lcbbmbnzkw4sahkv1s9v',
        cuisine: 'Bakery, Desserts',
        rating: '4.5 Rating',
        time: '50 Mins'
    },
    {
        id: 3,
        name:'Chamail Singh The Dhaba',
        image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ge2lzhxpx7izcbpseria',
        cuisine: 'Bakery, Desserts',
        rating: '4.2 Rating',
        time: '30 Mins'
    }
];
const RestaurentCard = (props) => {
    // this is Object Destructuring
    const {restData} = props;
    const {name,cuisine,rating,time, image} = restData;

    return (
        <div className="rest-card">
            <img className="rest-img" src={image}/>
            <h3>{name}</h3>
            <h5>{cuisine}</h5>
            <h5>{rating}</h5>
            <h5>{time}</h5>
        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Restaurant..." />
      </div>
      <div className="rest-container">
        {
            restaurantData.map((data) =>( 
                <RestaurentCard key={data.id} restData={data}/>
            ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
