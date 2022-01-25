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
            {restaurants.map( (restuarant: Restaurant, index: any ) => (
                 <div className='list'> 
                  <img src={restuarant.image_url} alt="restuarant" />
                    <h3>Restuarant Name</h3>

                    <p>Restuarant Details</p>

                    <button>Delete</button>
                    <button>Add to Favorites</button>
                </div>
            ))}
        </>
    );  
};

export default BucketList;