import { useContext } from 'react';
import BucketListRow from './BucketListRow';
import BucketContext from './BucketContext';


function BucketList() {
   
    const context = useContext(BucketContext);
    
    

    return (
        <div className="bucketlist-container">
           <h1>My Bucketlist</h1>
            <table>
                <thead>
                    <td><strong>Name</strong></td>
                    <td><strong>City</strong></td>
                    <td><strong>Restaurant Link</strong></td>
                    <td><strong>Remove</strong></td>
                    </thead>
                {
                    context.bucketList.map((foodItem, i) => <BucketListRow foodItem={foodItem} index={i}/>)
                    
                }
                
            </table>

        </div>
    )
}

export default BucketList;