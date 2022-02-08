import axios, { AxiosResponse } from "axios";
import { Restaurant } from "./RestaurantInterface";
import IBusinessResponse from "./types/IBusinessResponse";
import { IBusiness } from "./types/IBusinessResponse";

const endpoint = process.env.REACT_APP_API_URL + `/yelp/`
console.log(endpoint);
function GetResponseData(response: AxiosResponse <IBusiness[]>) : IBusiness[] {
    return response.data
}

function GetResponseDataSingle(response: AxiosResponse <IBusiness>) : IBusiness {
    return response.data
}

export function GetRestaurants(id?: string) : Promise<IBusiness>{
    return axios
        .get<IBusiness>(`${endpoint}${id}`)
        .then(GetResponseDataSingle)
};

export function SearchRestaurants(params?: any) : Promise<IBusiness[]>{
    return axios
        .get(endpoint, {params})
        .then(GetResponseData)
};