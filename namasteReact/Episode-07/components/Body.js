import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link } from "react-router";

const Body = () => {

    //ALL BELOW STATE VARIABLES ARE ALREADY DISCUSSED
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("render")
    
    useEffect(() => {  //USE EFFECT VARIABLE TO FETCH THE DATA
        fetchData();
    }, []);

    //we are directly fetching the data form the swiggy API's 
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurants.length == 0 ? < Shimmer /> : (
        <div className="body"> //BODY SECTION STARTING
            <div className="filter"> //FOR FILTERING
                <div className="search"> //SEARCH
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={
                            (e) => setSearchText(e.target.value)

                        }
                    />
                    <button onClick={() => {  //BUTTON TO FILTER/SEARCH
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>

                </div>

                {/*Filter to top rated Restaurants */}
                <button 
                    className="filter-btn"  //FILTER BTN TO FILTER ACCORDING TO THE RATING

                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => (res.info.avgRatingString) > 4
                        );

                        setFilteredRestaurant(filteredList);
                        console.log("Button clicked")
                    }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container" >
                {   //Anytime we link to an internal path, we will use <Link> instead of <a href="">.
                    filteredRestaurant.map((restaurant) => (
                       <Link key={restaurant.info.id} to = {"/restaurants/" + restaurant.info.id}> <RestaurantCard  resData={restaurant} />
                        </Link> 
                    )) //the above <link> is provided by the react-router 
                }
            </div>
        </div>
    )
}
export default Body;
