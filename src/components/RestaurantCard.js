import {CDN_URL} from "../utils/constants.js";

const RestaurantCard =(props)=>{
    const{resData}=props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;

    const deliveryTime = resData?.info?.sla?.deliveryTime;

    return(
        <div className="m-4 p-4 w-[220px] rounded-md  bg-gray-100 shadow-md hover:bg-gray-200" >
            <img
                className="res-logo rounded-lg"
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId
                 }
                />
            <div className="res-details font-sans ">
            <h3 className="font-bold py-2 text-lg" >{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
            </div>
        </div>
    );
};

export const withPromtedLabel =(RestaurantCard =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white p-0.5 m-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
});


export default RestaurantCard;