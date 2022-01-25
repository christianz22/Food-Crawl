import axios from "axios";
import { Restaurant } from "./RestaurantInterface";

const restaurantApiKey : string = process.env.REACT_APP_YELP_API_CREDS || '';

export function GetRestaurants(id?: string) : Promise<Restaurant>{
    return axios
        .get(`http://localhost:5000/yelp/${id}`)
        .then(response => {console.log(response.data)
            return response.data
        })
};