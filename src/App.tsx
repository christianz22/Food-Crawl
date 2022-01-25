
import './App.css';
import { useState } from 'react';
import Food from './Business';
import Reviews from './Rewiews';
import RestaurantInfo from './RestaurantInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Restaurant } from './RestaurantInterface';

function App() {
  const [details, setDetails] = useState<Restaurant[]>([{
    "id":"GlPJPpKvPR4d8dmcSEYpdA",
    "alias":"takahachi-bakery-new-york",
    "name":"Takahachi Bakery",
    "image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/oP2xYZjbAa8akp-9CLmiVQ/o.jpg",
    "is_closed":false,
    "url":"https://www.yelp.com/biz/takahachi-bakery-new-york?adjust_creative=rO8TiUYEzJLoStdM0GnOsQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rO8TiUYEzJLoStdM0GnOsQ",
  
    "categories":[
       {
          "alias":"bakeries",
          "title":"Bakeries"
       },
       {
          "alias":"japanese",
          "title":"Japanese"
       },
       {
          "alias":"coffee",
          "title":"Coffee & Tea"
       }
    ],
    "rating":4,
    "coordinates":{
       "latitude":40.71393,
       "longitude":-74.00822
    },
    "location":{
       "address1":"25 Murray St",
       "address2":"",
       "address3":"",
       "city":"New York",
       "zip_code":"10007",
       "country":"US",
       "state":"NY",
       "display_address":[
          "25 Murray St",
          "New York, NY 10007"
       ]
    },
    "distance":1511.7020935512141
  }]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <h1>Food Crawl</h1>
      <Routes>
        <Route
          path='/restaurant-info/:restaurantId'
          element={<RestaurantInfo details={details} />}
        />
        <Route
          path='/reviews' 
          element={<Reviews />}
          />
        <Route
          path='/food/'
          element={<Food />}
        />
      </Routes>
    </div>
    </Router>
  );
}
export default App;

