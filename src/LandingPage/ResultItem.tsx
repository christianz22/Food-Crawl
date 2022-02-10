import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IBusiness } from '../types/IBusinessResponse';
import BucketContext from '../components/BucketList/BucketContext';
import AuthContext from '../authentication/AuthContext';
import axios from 'axios';
import BucketList from '../components/BucketList/BucketList';



interface IProps {
    item: IBusiness;
    
}


 const ResultItem = ({item}: IProps ) => {
    
    const {addBucket, addFavorite} = useContext(BucketContext);
    const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/';
    const {user} = useContext(AuthContext);



    

    return (
        <div className='result-item'>
        <img className ='imgUrl' src={item.image_url}></img>
        <h3><strong>{item.name}</strong></h3>
        <p><strong>City: </strong>{item.location?.city}</p>
        <button
            type="submit"
            onClick={() => {
                axios.post(apiUrl + 'bucketlist', {
                    ...item,
                    user: user?.uid,
                    restaurantId: item.id,
                })
                addBucket(item);
                console.log(item);
            }}>
            Add to My Bucket List
        </button>
        <button
            type="submit"
            onClick={() => {
                axios.post(apiUrl + 'favorites', {
                    ...item,
                    user: user?.uid,
                    restaurantId: item.id,
                })
            addFavorite(item);
            }}>
            Add to Favorites
        </button>
        <p><Link to={"restaurant-info/"+item.id}>See More Details</Link></p>
        </div>
    )
 }

 export default ResultItem;