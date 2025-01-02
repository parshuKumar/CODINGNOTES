import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link } from "react-router";

const Body = () => {

    //Local State variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log("render")

    //use Effect will take two arguments first one is a call back funciton and 
    //second one will be dependency array
    //callback fn will be called once the render cycle is finished
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

    //Conditional Rendering
    // if(listOfRestaurants.length == 0){
    //     return < Shimmer />;
    // }

    //Another way for the above conditional rendering is ternery operator

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
                {/*
                 <RestaurantCard resData = {resList[0]} />
                <RestaurantCard resData = {resList[1]} />
                <RestaurantCard resData = {resList[2]} />
                <RestaurantCard resData = {resList[3]} />
                <RestaurantCard resData = {resList[4]} />
                <RestaurantCard resData = {resList[5]} /> 
                we will make this modular too by using the for loop
                or we can also do so map filer or reduce;
                
                */}
                {
                    filteredRestaurant.map((restaurant) => (
                       <Link key={restaurant.info.id} to = {"/restaurants/" + restaurant.info.id}> <RestaurantCard  resData={restaurant} />
                        </Link>
                    ))

                    // resList.map((restaurant , index) => (
                    //     <RestaurantCard key = {index} resData = {restaurant}/>
                    //     ))
                    //we can use index but we should not
                    //even react tell us that we should not use the index as a key
                    //and always put the key in this rather than not having the key        


                }
            </div>
        </div>
    )
}

export default Body;