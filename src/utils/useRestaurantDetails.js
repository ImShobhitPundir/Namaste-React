import { useState, useEffect } from "react";

const useRestaurantDetails = (resId) => {
  const [data, setData] = useState();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const dt = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4554726&lng=77.0219019&restaurantId=${resId}`
    );
    const json = await dt.json();
    setData(json.data);
    //setData(json.data?.cards[0]?.card?.card?.info);
    //setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }
  return data;
};

export default useRestaurantDetails;
