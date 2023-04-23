import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4554726&lng=77.0219019&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json.data?.cards[2]?.data?.data?.cards);
  }

  filterData(searchText, restaurantList);

  // if user offline
  const isOnline = useOnline();
  if(!isOnline){
    return <h2>Offiline! Please check your internet connection.</h2>
  }

  // Return Early
  if(!restaurantList) return null;

  //conditional rendering
  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
     
      <div className="search-container">
        <button
          className="top-rated-rest"
          onClick={() => {
            const filterData = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurantList(filterData);
          }}
        >
          Top Rated Restaurant
        </button>

        <input
          type="text"
          placeholder="Search Restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(e.target.value, restaurantList);
            setFilteredRestaurantList(data);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurantList.length === 0 ? (
          <h5 style={{textAlign:'center'}}>No Restaurant Found</h5>
        ) : (
          <>
            {filteredRestaurantList?.map((row) => (
              <RestaurantCard key={row.data.id} restData={row} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
