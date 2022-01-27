import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IBusiness } from '../types/IBusinessResponse';

interface IProps {
    item: IBusiness;
    
}


 const ResultItem = ({item}: IProps ) => {
    
    const [bucketList, setBucketList] = useState<IBusiness[]>([]);

    const addBucketList = (business: IBusiness) => {
        setBucketList((prevBusiness) => {
          return [...prevBusiness, business];
        });
      };
    

    return (
        <div className='result-item'>
        <img className ='imgUrl' src={item.image_url}></img>
        <h3><strong>{item.name}</strong></h3>
        <p><strong>City: </strong>{item.location?.city}</p>
        <button
            type="submit"
            onClick={() => {
            addBucketList(item);
            }}>
            Add to My Bucket List
        </button>
        <p><Link to={"restaurant-info/"+item.id}>See More Details</Link></p>
        </div>
    )
 }

 export default ResultItem;