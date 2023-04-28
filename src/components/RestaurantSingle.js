import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_CDN } from "../utils/constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurentSignle = () => {
  const params = useParams();
  
  const restaurantDetails = useRestaurantDetails(params.id);
  const data = restaurantDetails?.cards[0]?.card?.card?.info;
  const menu = restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  ?.card?.itemCards;
  
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item))
  }
 
  return !data ? (
    <Shimmer />
  ) : (
    <div className="px-40 py-4" data-testid="menu">
      <h2 className="font-bold text-xl text-gray-700">{data.name}</h2>
      <p className="text-sm text-gray-700 mt-2">{data.cuisines.join(", ")}</p>
      <p className="text-sm text-gray-700">{data.city}</p>
      
      <div className="flex my-4">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info" alt=""/>
      <p className="text-sm ml-2">{data.feeDetails.message}</p>
      </div>

      <div className="border-dashed  border-t border-gray-400 ">
      <p className="font-bold mt-3 text-gray-800">{data.sla.slaString} | {data.costForTwoMessage}</p>
      </div>

      <br/>
      <h3 className="font-bold mt-5 mb-3">Recommended ({menu?.length})</h3>
      <table >
        {menu?.map((row,index) => (
          <tr key={index} className="border-solid border-t border-gray-400">
            <td className="py-5">
                <p className="font-semibold">{row.card.info.name}</p>
                <p>Rs. {row.card.info.price/100}</p>
                <p className="text-sm text-gray-400 mt-4">{row.card.info.description}</p>
            </td>
            <td className="py-5 text-center">
              <img src={IMAGE_CDN+row.card.info.imageId} className="w-[200px] h-[120px] rounded-sm object-cover"/>
              <button className="shadow-md p-1 px-3 text-green-700 font-bold hover:shadow-lg mt-[-30px]" onClick={()=>handleAddItem(row.card.info)} data-testid="add-cart-btn">ADD +</button>
            
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RestaurentSignle;
