import { useContext } from 'react';
import BucketContext from './BucketContext';
import { IBusiness } from '../../types/IBusinessResponse';


function BucketListRow({ foodItem: foodItem, index }: { foodItem: IBusiness, index: number }) {

   const {removeBucket} = useContext(BucketContext);

    return (
        <tr className='bucket-list-row'>
            <td>{foodItem.name}</td>
            <td>{foodItem.location?.city}</td>
            <td><a href={foodItem.url}>Website</a></td>
            <td><button onClick={ () => removeBucket(index)}>Remove</button></td>
        </tr>
    )
}

export default BucketListRow;