import { useState } from 'react';
import './Bucket.css'

import { IBusiness } from '../../types/IBusinessResponse';



function BucketList () {
    
    const [bucketList, setBucketList] = useState<IBusiness[]>([]);

    const handleDelete = (i: number) => {
        setBucketList((prevBucketList) => {
          return [...prevBucketList.slice(0, i), ...prevBucketList.slice(i + 1)];
        });
      };

    return (

        <>
            {bucketList.map( (restuarant, i ) => {
                <div className='bucketList'> 
                <div className='bucketListItems'> 

                    <h2>{restuarant.name}</h2>
                    <h3>{restuarant.location?.city}</h3>
                    
                </div>
                <div className='bucketListBtns'>
                <button
                type="submit"
                onClick={() => {
                    handleDelete(i);
                }}>
                Delete
              </button>
                    <button>Add to Favorites</button>
                </div>
                </div>  
                
        })}
        </>
    );  
};

export default BucketList;