import { useContext } from 'react';
import BucketContext from './BucketContext';
import { IBusiness } from '../../types/IBusinessResponse';
import { BsFillTrashFill  } from "react-icons/bs";


function FavoritesListRow({ favItem: favItem, index }: { favItem: IBusiness, index: number }) {

   const {removeFavorite} = useContext(BucketContext);

    return (
        <tr className='favorite-list-row'>
            <td>{favItem.name}</td>
            <td>{favItem.location?.city}</td>
            <td><a href={favItem.url}>Website</a></td>
            <td><BsFillTrashFill onClick={ () => removeFavorite(index)}/></td>
        </tr>
    )
}

export default FavoritesListRow;