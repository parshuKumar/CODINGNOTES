import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import {useState} from "react";

const Body = () => {

    //Local State variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className = "body">
            <div className = "filter">
                <button className = "filter-btn"
        //Making a filter button in the body section to filter the restaurant 
        //according to anything like here "rating".
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => (res.info.avgRatingString) > 4
                        );
        //using the below function to change the listOfRestaurants variable 
        //that will now contain filteredList after the button is clicked           
                setListOfRestaurants(filteredList);
                console.log("Button clicked")
            } } 
                >Top Rated Restaurants </button>
            </div>
            <div className = "res-container" >
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
                    listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
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
