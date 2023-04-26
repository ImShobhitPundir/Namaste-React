import { useContext } from "react";
import { IMAGE_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // this is Object Destructuring
  const { restData } = props;
  const {
    id,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    cloudinaryImageId,
  } = restData.data;

  const {user} = useContext(UserContext);

  return (
    <div className="w-[250px] h-[280px] shadow-lg m-2 hover:bg-gray-100">
      <Link to={"restaurant/single/" + id}>
        <img src={IMAGE_CDN + cloudinaryImageId} />
        <div className="p-2">
          <div className="font-semibold text-md">{name}</div>
          <p className="text-xs mt-1">{cuisines.join(", ")}</p>
          <div className="flex justify-between text-xs mt-3">
            <span className="bg-green-500 px-1 text-white">{avgRating}</span>
            <span>•</span>
            <span>{deliveryTime} MIN</span>
            <span>•</span>
            <span>{costForTwoString}</span>
          </div>
          <p>{user.name} {user.email}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
