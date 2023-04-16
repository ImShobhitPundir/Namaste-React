import { IMAGE_CDN } from "../utils/constants";

const RestaurentCard = (props) => {
    // this is Object Destructuring
    const {restData} = props;
    const {name,cuisines,avgRating,deliveryTime, costForTwoString, cloudinaryImageId} = restData.data;

    return (
        <div className="rest-card">
            <img className="rest-img" src={IMAGE_CDN+cloudinaryImageId}/>
            <div className="rest-title">{name}</div>
            <p className="rest-cuisines">{cuisines.join(', ')}</p>
            <div className="rest-details">
                <span className="rest-rating">{avgRating}</span>
                <span>•</span>
                <span>{deliveryTime} MIN</span>
                <span>•</span>
                <span>{costForTwoString}</span>

            </div>
           
        </div>
    )
}

export default RestaurentCard;