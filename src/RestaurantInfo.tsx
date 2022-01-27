import { useParams } from "react-router";
import { Restaurant } from "./RestaurantInterface";
import { GetRestaurants } from "./GetRestaurants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RestaurantInfo() {
    let id = useParams().restaurantId as string;
    // at some point this will be replaced with array of restaurants.
    // let restaurant = details.find((r) => {
    //    return r.id === id
    // })
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
    useEffect (() => {
        GetRestaurants(id).then ((response) => {
            setRestaurant(response)
        })
    }, [])
    if ( !restaurant ) {
        return <div>Not found</div>
    } else {
    return (
        <div>
            <Link to='/'> Return Home</Link>  
            <h1>{restaurant.name}</h1>
            <img src={restaurant.image_url}></img>
            <p><strong>Rating:</strong></p>
            <p>{restaurant.rating}</p>
            <p><strong>Address:</strong></p>
            <p>Street: {restaurant.location?.address1}</p>
            <p>City: {restaurant.location?.city}</p>
            <p>State: {restaurant.location?.state}</p>
            <p>Zipcode: {restaurant.location?.zip_code}</p>
            <h1>Reviews:</h1>
            <p>Reviews go here!</p>  
        </div>
    )}
};
export default RestaurantInfo;
