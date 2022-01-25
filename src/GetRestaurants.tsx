import axios from "axios";
import { Restaurant } from "./RestaurantInterface";

const restaurantApiKey : string = process.env.REACT_APP_YELP_API_CREDS || '';

export function GetRestaurants(id?: string) : Promise<Restaurant[]>{
    return axios
        .get(`https://api.yelp.com/v3/businesses/search/restaurant?api_key=${restaurantApiKey}/${id}`)
        .then(response => {console.log(response.data.results)
            return response.data.results
        })
};