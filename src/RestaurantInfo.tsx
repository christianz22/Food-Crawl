import { useParams } from "react-router";
import { GetRestaurants } from "./GetRestaurants";
import ReviewPosts from "./ReviewPosts";
import { useEffect, useState } from "react";
import { IBusiness } from "./types/IBusinessResponse";

function RestaurantInfo() {
    let id = useParams().restaurantId as string;
    // at some point this will be replaced with array of restaurants.
    // let restaurant = details.find((r) => {
    //    return r.id === id
    // })
    const [restaurant, setRestaurant] = useState<IBusiness | null>(null)
    useEffect (() => {
        GetRestaurants(id).then ((response) => {
            setRestaurant(response)
        })
    }, [])
    if ( !restaurant ) {
        return <div>Not found</div>
    } else {
    return (
        <div className="reviews-page"> 
            <h1>{restaurant.name}</h1>
            <div className= 'imgContainer'>
                <img className= 'imgUrl' src={restaurant.image_url}></img>
            </div>
            <p><strong>Rating:</strong></p>
            <p>{restaurant.rating}</p>
            <p><strong>Address:</strong></p>
            <p>Street: {restaurant.location?.address1}</p>
            <p>City: {restaurant.location?.city}</p>
            <p>State: {restaurant.location?.state}</p>
            <p>Zipcode: {restaurant.location?.zip_code}</p>
            <p><ReviewPosts restaurantId={restaurant.id || ''}/></p> 
        </div>
        
    )}
};

export default RestaurantInfo;