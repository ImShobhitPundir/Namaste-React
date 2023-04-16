import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
      <div className="body">
        <div className="search-container">
            <button className="top-rated-rest" onClick={()=>{
                const filterData = restaurantList.filter((res)=>res.data.avgRating>4);
                setRestaurantList(filterData);
            }}>Top Restaurant</button>
          <input type="text" placeholder="Search Restaurant..." />
        </div>
        <div className="rest-container">
          {
              restaurantList.map((row) =>( 
                  <RestaurentCard key={row.data.id} restData={row}/>
              ))
          }
        </div>
      </div>
    );
  };

export default Body;