export interface IBusiness {
    "id": string;
    "rating": number;
    "phone": number;
    "alias": string;
    "is_closed": boolean;
    "name": string;
    "image_url": string;
    "url": string;
    
}

export default interface IBusinessResponse {
    
    "data": IBusiness[];
      
 }

 