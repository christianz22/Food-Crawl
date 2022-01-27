import react, {useState, useEffect} from 'react'
import RestaurantResponse, { Restaurant } from '../../RestaurantInterface';
import './Bucket.css'
import foodAPI from '../../RestuarantAPI';
import axios from 'axios';


const BucketList = () => {
    const [restaurants, setRestuarants] = useState < Restaurant[]> ([ ])
   
    // axios.get(`${foodAPI}`, {params}).then((response: RestaurantResponse) => {
    //     const {results} = response;
    //     setRestuarants(results);
    // }).catch((error) => {
    //     console.error(error);
    // })
    useEffect(() => {
        foodAPI().then((response: RestaurantResponse) => {
            console.log(response)
            const {results} = response;
            setRestuarants(results);
        }).catch((error) => {
            console.error(error);
        })
        
    }, [ ])


    return (

        <>
            {restaurants.map( (restaurant: Restaurant, index: any ) => (
                 <div className='list'> 
                  <img src={restaurant.image_url} alt="restuarant" />
                    <h3>{restaurant.name}</h3>
                    <div className='details'>
                        <p><strong>Address:</strong></p>
                        <p>Street: {restaurant.location?.address1}</p>
                        <p>City: {restaurant.location?.city}</p>
                        <p>State: {restaurant.location?.state}</p>
                        <p>Zipcode: {restaurant.location?.zip_code}</p>
                    </div>

                    <button>Delete</button>
                    <button>Add to Favorites</button>
                </div>
            ))}
        </>
    );  
};

export default BucketList;