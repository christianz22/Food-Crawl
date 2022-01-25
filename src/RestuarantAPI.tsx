import react, { useState } from 'react'
import RestaurantResponse from './RestaurantInterface';
// To Do need to call API no hard coded data
const foodAPI = () => {
    
    return new Promise <RestaurantResponse> ( (resolve) => {
        resolve({ results: [
           {
            "id": "fGj2fwdxSuIB3hYPaUq1WQ",
            "alias": "michigan-and-trumbull-detroit-6",
            "name": "Michigan & Trumbull",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6y6v8JrYWRIvKbplQesb5Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/michigan-and-trumbull-detroit-6?adjust_creative=kCSfOcifTSR6R4MPs_CzaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kCSfOcifTSR6R4MPs_CzaA",
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 42.3320754543569,
                "longitude": -83.0664473117439
            },

  
            "location": {
                "address1": "1441 W Elizabeth St",
                "address2": null,
                "address3": null,
                "city": "Detroit",
                "zip_code": "48216",
                "country": "US",
                "state": "MI",
                "display_address": [
                    "1441 W Elizabeth St",
                    "Detroit, MI 48216"
                ]
            },

        },
        ]})}) 




    };

export default foodAPI;