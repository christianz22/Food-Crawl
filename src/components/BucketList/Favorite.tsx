import { useState, useContext } from 'react';
import IBusiness from '../../types/IBusinessResponse';
import FavoritesListRow from './FavoriteList';
import BucketContext from './BucketContext';


function Favorite() {
   
    const context = useContext(BucketContext);
    
    

    return (
        <div className="favorite-container">
           
            <table>
                <thead><td>Name</td><td>City</td><td>Restaurant Link</td><td>Remove</td></thead>
                {
                    context.favorite.map((favItem, i) => <FavoritesListRow favItem={favItem} index={i}/>)
                    
                }
                
            </table>

        </div>
    )
}

export default Favorite;