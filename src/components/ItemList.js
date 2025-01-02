import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { CDN_URL} from "../utils/constants";
import { useDispatch } from "react-redux";



const ItemList =({items,dummy}) => {
    const dispatch = useDispatch();


    const handleAddItem = (items) =>{
        dispatch(addItem(items));

    }



    return(
    <div >
        {items.map((items ) => (
        <div key={items?.card?.info?.id} 
           className="p-2 m-2 border-gray-200 border-b-2 text-left ">
        
        <div className="flex"> 
            <div className="mx-5 left-full ">
                <div className="py-2">
                    <span className="font-bold text-lg ">{items.card.info.name}</span>
                    <span> - ₹{items.card.info.price/100||items.card.info.defaultPrice/100}</span>
                </div>
               <p className="text-xs">{items.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
                <div className="absolute">
                    <button className="p-2 rounded-lg bg-white shadow-lg"
                         onClick={()=>handleAddItem(items)}
                         >
                        Add +
                        </button>
                </div>
                <img src={CDN_URL + items.card.info.imageId } className="w-200 h-200 rounded-lg m-5 ;"/>
            </div>
            
        </div>
        </div>
        ))}
    </div>
    );
};

export default ItemList;