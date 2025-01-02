import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromtedLabel } from "./RestaurantCard";

const Body=() => {
//Local State Variable
const [ListOfRestaurants, setListOfRestaurant]= useState([]);
const [filteredRestaurant,setFilteredRestaurant]= useState([]);
const[searchText, setsearchText]=useState("");
const RestaurantCardPromoted= withPromtedLabel(RestaurantCard);

console.log("Body Rendered",ListOfRestaurants);


useEffect(()=>{
    fetchData();
},[]);

const fetchData= async()=>{
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.619239&lng=88.350724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json= await data.json();

    console.log(json);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};



const onlineStatus= useOnlineStatus();
if (onlineStatus===false) 
    return(
<h1>
    Looks like you're offline!! Please check your internet connection.
</h1>
);



////Conditional Rendering//// 
return ListOfRestaurants.length===0 ? (
    <Shimmer/>
) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="search-box  border border-solid border-black "
                     value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button className="px-5 py-1 bg-green-200 m-4 rounded-lg"
                    onClick={()=>{

                        console.log(searchText);

                        const filteredRestaurant = ListOfRestaurants.filter(
                            (res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }} 
                    >search
                    </button>
                </div>
                <button className="px-5 py-1 bg-gray-100 m-12 rounded-lg"   
                onClick={()=>{
                   //filter logic
                   const filteredList = ListOfRestaurants.filter(
                    (res) => res.info?.avgRating>4.2
                   );
                   setFilteredRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant
                </button>
                </div>

            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant )=>(
                    <Link 
                    key={restaurant.info.id} 
                    to={"/restaurants/" + restaurant.info.id}
                    >
                    {restaurant.info.type ? (
                        <RestaurantCardPromoted resData={restaurant} />
                ):(
                        <RestaurantCard resData={restaurant} />
                )}
                </Link>
                ) )}
            </div>
        </div>
    );
};

export default Body;