import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    ///KEEPING IT EMPTY TO LOAD THE NULL SO THAT SHIMMER UI CAN SHOW
    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    //THIS WILL CONTAIN THE FILTER DATA FOR THE FILTER BUTTON
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
    //THIS WILL MAINTAIN THE SEARCH TEXT BASICALLY WILL SHOW TYPED TEXT IN INPUT BOX
    const [searchText, setSearchText] = useState("");

    console.log("render")

//use Effect will take two arguments first one is a call back funciton and 
//second one will be dependency array
//callback fn will be called once the render cycle is finished
    useEffect(() => {
        fetchData();
    },[]); 

//we are directly fetching the data form the swiggy API's 
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json(); //to convert the data into json format
        console.log(json);

        //optional chaining == ?.(symbol)
       setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
 
//Conditional Rendering
    // if(listOfRestaurants.length == 0){
    //     return < Shimmer />;
    // }

//Another way for the above conditional rendering is ternery operator

    return listOfRestaurants.length == 0 ? < Shimmer/> : (
        <div className = "body">
            <div className = "filter">
               <div className="search">
               <input type = "text" className = "search-box" 
                   value = {searchText}
                   onChange={
                    (e)=>setSearchText(e.target.value)
                   }
               />
               <button onClick={()=>{
                //filter the restaurant cards and update the UI
                //searchText
                // console.log(searchText);
                //observe we are filtering the data from the listOfRestaurants(ORIGINAL DATA)
                const filteredRestaurant = listOfRestaurants.filter((res)=>
                     res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurant);
                
               }}>Search</button>
               
               </div>

               {/*Filter to top rated Restaurants */}
                <button                 
                    className = "filter-btn"

                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => (res.info.avgRatingString) > 4
                        );
                   
                 setFilteredRestaurant(filteredList);
                console.log("Button clicked")
            } } 
                >Top Rated Restaurants
                 </button>
            </div>
                        
            <div className = "res-container" >
                {
                    filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                    ))
    
                }
            </div>
        </div>
    )
}

export default Body;
