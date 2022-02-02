import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IBusiness } from '../types/IBusinessResponse';
import BucketContext from '../components/BucketList/BucketContext';




interface IProps {
    item: IBusiness;
    
}


 const ResultItem = ({item}: IProps ) => {
    
    const {addBucket, addFavorite} = useContext(BucketContext);
    


    

    return (
        <div className='result-item'>
        <img className ='imgUrl' src={item.image_url}></img>
        <h3><strong>{item.name}</strong></h3>
        <p><strong>City: </strong>{item.location?.city}</p>
        <button
            type="submit"
            onClick={() => {
            addBucket(item);
            }}>
            Add to My Bucket List
        </button>
        <button
            type="submit"
            onClick={() => {
            addFavorite(item);
            }}>
            Add to Favorites
        </button>
        <p><Link to={"restaurant-info/"+item.id}>See More Details</Link></p>
        </div>
    )
 }

 export default ResultItem;