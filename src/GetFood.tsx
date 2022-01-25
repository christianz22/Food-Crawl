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
   
    return axios.get(`http://localhost:5000/yelp/?term=sushi`).then( (response: any ) => {
        
        return response.data;
        
    });
    
}



export default GetBusiness;