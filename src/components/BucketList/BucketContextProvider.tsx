import { ReactNode, useState, useEffect, useContext } from "react";
import { IBusiness } from "../../types/IBusinessResponse";
import BucketContext from './BucketContext';
import AuthContext from '../../authentication/AuthContext';
import axios from 'axios';


interface Props { children: ReactNode; }

function BucketContextProvider({children}: Props) {
    const [bucketList, setBucketList] = useState<IBusiness[]>([]);
    const [favorite, setFavorite] = useState<IBusiness[]>([]);
    const {user} = useContext(AuthContext);
    useEffect(() =>{
        // calls bucketlist API
        if (user) {
        const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/bucketlist/' + user.uid;
        axios.get(apiUrl).then((response) =>{
            setBucketList(response.data)
        })}
    },[user])

    useEffect(() =>{
        // calls favorites API
        if (user) {
        const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/favorites/' + user.uid;
        axios.get(apiUrl).then((response) =>{
            setFavorite(response.data)
        })}
    },[user])

    function addBucket(bucketList: IBusiness): void {
        setBucketList(prev => [...prev, bucketList]);
        console.log(bucketList);
    }

    const removeBucket = (i: number): void => {
        const bucketToRemove = bucketList[i]
        const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/bucketlist/' + user?.uid+ "/" + bucketToRemove.id;
        axios.delete(apiUrl)
        setBucketList((prevBuckets) => {
        return [...prevBuckets.slice(0, i), ...prevBuckets.slice(i + 1)];
    })
    }
    function addFavorite(favorite: IBusiness): void {
        setFavorite(prev => [...prev, favorite]);
        console.log(favorite);
    }

    const removeFavorite = (i: number): void => {
        const favoriteToRemove = favorite[i]
        const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/favorites/' + user?.uid+ "/" + favoriteToRemove.id;
        axios.delete(apiUrl)
        setFavorite((prevFavorite) => {
        return [...prevFavorite.slice(0, i), ...prevFavorite.slice(i + 1)];
    })
    }

    // THIS MUST BE THE AREA FOR THIS FUNCTION TO APPLY CONTEXT TO ALL

    return (
        <BucketContext.Provider value={{bucketList, addBucket, removeBucket, favorite, addFavorite, removeFavorite}}>
            {children}
        </BucketContext.Provider>
    )
}

export default BucketContextProvider;