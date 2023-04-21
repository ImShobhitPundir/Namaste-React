import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_CDN } from "../utils/constants";

const RestaurentSignle = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const dt = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4554726&lng=77.0219019&restaurantId=${params.id}`
    );
    const json = await dt.json();
    setData(json.data?.cards[0]?.card?.card?.info);
    setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards);
  }
  return !data ? (
    <Shimmer />
  ) : (
    <div className="body">
      <h2>{data.name}</h2>
      <p>{data.cuisines.join(", ")}</p>
      <p>{data.city}</p>
      
      <p style={{fontSize:'13px'}}><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info" alt="" style={{marginTop:'15px'}}/> {data.feeDetails.message}</p>

      <div style={{borderTop:'.5px dotted #d3d3d3'}}>
      <p style={{fontWeight:'bold'}}>{data.sla.slaString} | {data.costForTwoMessage}</p>
      </div>

      <br/>
      <h3>Recommended ({menu.length})</h3>
      <table style={{borderCollapse: 'collapse'}}>
        {menu?.map((row,index) => (
          <tr key={index} style={{borderTop:'.5px solid #d3d3d3'}}>
            <td style={{width:'80%'}}>
                <p style={{color:'#3e4152',fontWeight:500, fontSize:'1rem'}}>{row.card.info.name}</p>
                <p>Rs. {row.card.info.price/100}</p>
                <p style={{fontSize:'13px', color:'rgba(40,44,63,.45)'}}>{row.card.info.description}</p>

            </td>
            <td><img src={IMAGE_CDN+row.card.info.imageId} style={{width:'150px',borderRadius:'10px'}}/></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RestaurentSignle;
