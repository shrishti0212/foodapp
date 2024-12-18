import React from "react";
import ReactDOM from "react-dom/client";
/**
 * header
 * - logo
 * - nav items
 * Body
 *  - search
 *  - restaurant container
 *   - restaurant card
 *       -Img
 *       - Name od res, Star, Rating ccuisine,
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 */

const Header= () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src="https://export-download.canva.com/MjDhQ/DAGZkuMjDhQ/4/0/0001-2896264890910656790.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20241217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241217T141300Z&X-Amz-Expires=21515&X-Amz-Signature=6f203647b9cf1ed3179d7b16931c965f040fb5a25ba968cea6fe198bab958e5a&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Yellow%2520Abstract%2520Cooking%2520Fire%2520Free%2520Logo.png&response-expires=Tue%2C%2017%20Dec%202024%2020%3A11%3A35%20GMT"
                />
            </div>
        <div className="nav-items"> 
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};
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
        <div className="res-card" style={{background: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" +
                    resData.info.cloudinaryImageId
                 }
                />
            <div className="res-details">
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
            </div>
        </div>
    );
};

const resList=[
    {
      "info": {
        "id": "898041",
        "name": "Thikana",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
        "locality": "RANGLA PUNJAB PARASIA ROAD",
        "areaName": " ADARSH NAGAR CHHINDWARA",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4.2,
        "parentId": "215738",
        "avgRatingString": "4.2",
        "totalRatingsString": "7",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 13.6,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "13.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-18 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "196341",
        "name": "Rangla Panjab",
        "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
        "locality": "Shankaracharya Nagar",
        "areaName": "Prasia Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "166894",
        "avgRatingString": "4.2",
        "totalRatingsString": "417",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 13.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "13.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-18 23:40:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/rangla-panjab-shankaracharya-nagar-prasia-road-rest196341",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "898044",
        "name": "Thikana Special",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/6adf18b9-0a2e-45ad-b587-3f714762f7bd_898044.jpg",
        "locality": "Punjab ",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Biryani",
          "Sweets",
          "Salads"
        ],
        "avgRating": 4.7,
        "parentId": "522552",
        "avgRatingString": "4.7",
        "totalRatingsString": "12",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 13.5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "13.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-18 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/thikana-special-punjab-chhindwara-city-rest898044",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "487096",
        "name": "Dino's Pizza",
        "cloudinaryImageId": "seqnlipynpingek2iirl",
        "locality": "Teacher's Colony",
        "areaName": "Parasia Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Burgers",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "387459",
        "avgRatingString": "4.1",
        "totalRatingsString": "275",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 12.3,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "12.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-18 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/dinos-pizza-teachers-colony-parasia-road-rest487096",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "150590",
        "name": "7 hills momo",
        "cloudinaryImageId": "h4osm2huq37ikb3r5aue",
        "locality": "Parasia Road",
        "areaName": "Chhindwara City",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 3.4,
        "parentId": "506961",
        "avgRatingString": "3.4",
        "totalRatingsString": "111",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 14.2,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "14.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-18 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/7-hills-momo-parasia-road-chhindwara-city-rest150590",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "870899",
        "name": "Paras Mishthan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
        "locality": "Nagarpalika Complex",
        "areaName": "Chhindwara City",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Beverages",
          "Sweets",
          "Snacks"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "510613",
        "avgRatingString": "3.8",
        "totalRatingsString": "27",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 11.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "11.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "498029",
        "name": "Omi Ki Bakery",
        "cloudinaryImageId": "tgh1teo4lkj5kuk7fkmo",
        "locality": "Rautha Wada",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "298958",
        "avgRatingString": "4.6",
        "totalRatingsString": "5",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 10.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "10.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/omi-ki-bakery-rautha-wada-chhindwara-city-rest498029",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "945448",
        "name": "Yummy Better",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
        "locality": "Chhindwara City",
        "areaName": "Chhindwara City",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Fast Food"
        ],
        "veg": true,
        "parentId": "557138",
        "avgRatingString": "NEW",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 11.2,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-a4b3922e-7966-4b17-a8f1-439123785b4d"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ] 
const Body=() => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="Res-container">
            {
                resList.map(restaurant =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ) )
            }
            </div>
        </div>
    );
};




const AppLayout =()=> {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);        
