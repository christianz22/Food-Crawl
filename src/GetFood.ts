import axios from 'axios';

export interface BusinessResponse {
    businesses: {businesses: BusinessItem[]};

}
export interface BusinessItem {
    rating: number;
    alias: string;
}


function GetBusiness(): Promise<BusinessItem[]> {
    return axios.get<BusinessResponse>(`https://api.yelp.com/v3/businesses/search/burger`).then( (response: any ) => {
        return response.data.businesses;
    });
}



export default GetBusiness;