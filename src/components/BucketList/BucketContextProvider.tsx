import { ReactNode, useState } from "react";
import { IBusiness } from "../../types/IBusinessResponse";
import BucketContext from './BucketContext';


interface Props { children: ReactNode; }

function BucketContextProvider({children}: Props) {
    const [bucketList, setBucketList] = useState<IBusiness[]>([]);

    function addBucket(bucketList: IBusiness): void {
        setBucketList(prev => [...prev, bucketList]);
    }

    const removeBucket = (i: number): void => {
        setBucketList((prevBuckets) => {
        return [...prevBuckets.slice(0, i), ...prevBuckets.slice(i + 1)];
    })
    }
    // THIS MUST BE THE AREA FOR THIS FUNCTION TO APPLY CONTEXT TO ALL

    return (
        <BucketContext.Provider value={{bucketList, addBucket, removeBucket}}>
            {children}
        </BucketContext.Provider>
    )
}

export default BucketContextProvider;