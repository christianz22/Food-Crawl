import axios from 'axios';

export interface BusinessResponse {
    businesses: {businesses: BusinessItem[]};

}
export interface BusinessItem {
    rating: number;
    alias: string;
    id: any;
}

function GetBusiness(): Promise<BusinessItem[]> {
   
    return axios.get(process.env.REACT_APP_API_URL + '/yelp').then( (response: any ) => {
        
        return response.data;
        
    });
    
}

export default GetBusiness;