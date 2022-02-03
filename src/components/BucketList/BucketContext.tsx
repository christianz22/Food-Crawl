import { IBusiness } from '../../types/IBusinessResponse';
import { createContext } from 'react'

interface BucketContextModel {
    bucketList: IBusiness[];
    addBucket: (item: IBusiness) => void;
    removeBucket: (item: number) => void;
    favorite: IBusiness[];
    addFavorite: (fav: IBusiness) => void;
    removeFavorite: (fav: number) => void;
}

const defaultValue: BucketContextModel = {
    bucketList: [],
    addBucket: () => {},
    removeBucket: () => {},
    favorite: [],
    addFavorite: () => {},
    removeFavorite: () => {}
}





const BucketContext = createContext(defaultValue);


export default BucketContext;