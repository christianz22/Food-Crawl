import { useContext } from 'react';
import BucketListRow from './BucketListRow';
import BucketContext from './BucketContext';


function BucketList() {
   
    const context = useContext(BucketContext);
    
    

    return (
        <div className="bucketlist-container">
           
            <table>
                <thead><td>Name</td><td>City</td><td>Restaurant Link</td><td>Remove</td></thead>
                {
                    context.bucketList.map((foodItem, i) => <BucketListRow foodItem={foodItem} index={i}/>)
                    
                }
                
            </table>

        </div>
    )
}

export default BucketList;