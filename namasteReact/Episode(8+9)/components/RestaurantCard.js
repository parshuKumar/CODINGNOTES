import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const{resData} = props; //destructuring the props (props is react) and destructuring is js
    const {name, cuisines, avgRatingString,costForTwo, slaParshu = {}} = resData?.info;
    
    return (
         <div className = "res-card" style = {{backgroundColor : "#f0f0f0"}}> 
            <img 
            className = "res-logo"
            alt="res-logo"
            src = {CDN_URL + resData.info.cloudinaryImageId}
            />
         
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaParshu.deliveryTime} minutes</h4>
         </div>
     )
 }
 export default RestaurantCard;
