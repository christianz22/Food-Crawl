import { IBusiness } from '../../types/IBusinessResponse';
import { createContext } from 'react'

interface BucketContextModel {
    bucketList: IBusiness[];
    addBucket: (item: IBusiness) => void;
    removeBucket: (item: number) => void;
}

const defaultValue: BucketContextModel = {
    bucketList: [],
    addBucket: () => {},
    removeBucket: () => {}
}



const BucketContext = createContext(defaultValue);

export default BucketContext;