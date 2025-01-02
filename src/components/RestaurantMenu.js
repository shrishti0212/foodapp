import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurnantCategory";
import ItemList from "./ItemList";

const RestaurantMenu =() => {

    const {resId}=useParams();
    const resInfo = useRestaurantMenu(resId);
    
    const[showIndex,setShowIndex]=useState();

    if (resInfo === null )
        return <Shimmer />;

  const { name ,cuisines ,costForTwoMessage} 
  = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards = 
 resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards ||  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;


  console.log( resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
    filter(
    (c) =>
     c?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)|| [];
console.log("categories: ",categories);

return (
    <div className="text-center py-4 m-4" >
        <h1 className="font-extrabold text-2xl py-2">{name}</h1>
        <p className="font-semibold text-sm">
            {cuisines.join(", ") || "No menu Available"} - {costForTwoMessage}
            </p>
        {/*Categories Accordions */}
        <div className="categories">
        {categories.map((category,index) => (
            <RestaurantCategory
             key={index} 
             data={category?.card?.card}
             showItems={index===showIndex ? true:false}
             setShowIndex={()=>setShowIndex(index)}
             />
            ))}
        </div>
        
    </div>
);
};


export default RestaurantMenu;