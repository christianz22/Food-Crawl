interface RestaurantResponse {
    results: Restaurant[]
}

export interface Restaurant
    {
        "id": string,
        "alias": string,
        "name": string,
        "image_url": string,
        "is_closed": boolean,
        "url": string,
        "categories":[
           {
              "alias": string,
              "title": string
           },
           {
              "alias": string,
              "title": string
           },
           {
              "alias": string,
              "title": string
           }
        ],
        "rating": number,
        "coordinates":{
           "latitude": number,
           "longitude": number
        },
        "location":{
           "address1": string,
           "address2": string,
           "address3": string,
           "city": string,
           "zip_code": string,
           "country": string,
           "state": string,
           "display_address": string[]
        },
        "distance": number
}  

export default RestaurantResponse;