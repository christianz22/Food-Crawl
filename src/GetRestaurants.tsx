import axios from "axios";
import { Restaurant } from "./RestaurantInterface";

export function GetRestaurants(id?: string) : Promise<Restaurant>{
    return axios
        .get(`http://localhost:5000/yelp/${id}`)
        .then(response => {console.log(response.data)
            return response.data
        })
};