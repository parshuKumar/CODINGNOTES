import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //Local State variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("render")

    useEffect(() => {
        fetchData();
    }, []);
    //we are directly fetching the data form the swiggy API's 
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        //optional chaining == ?.(symbol)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false) return <h1>
        Looks like you are fucking offline, Are you stupid or something, Don't even know how to turn on your Internet!!
    </h1>

    return listOfRestaurants.length == 0 ? < Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={
                            (e) => setSearchText(e.target.value)
                         }
                    />
                    <button onClick={() => {
                        //filter the restaurant cards and update the UI
                        //searchText
                        // console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>

                </div>

                {/*Filter to top rated Restaurants */}
                <button
                    className="filter-btn"

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

                {
                    filteredRestaurant.map((restaurant) => (
                       <Link key={restaurant.info.id} to = {"/restaurants/" + restaurant.info.id}> <RestaurantCard  resData={restaurant} />
                        </Link>
                    ))

                }
            </div>
        </div>
    )
}

export default Body;
