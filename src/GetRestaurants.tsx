import axios from "axios";
import { Restaurant } from "./RestaurantInterface";

export function GetRestaurants(id?: string) : Promise<Restaurant>{
    return axios
        .get(process.env.REACT_APP_API_URL + `/yelp/${id}`)
        .then(response => {console.log(response.data)
            return response.data
        })
};