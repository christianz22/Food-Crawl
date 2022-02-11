import { useState, useEffect, useContext } from "react";
import ReviewPost from "./ReviewPost";
import ReviewInList from "./ReviewInList";
import ReviewForm from "./ReviewPostForm";
import axios from "axios";
import AuthContext from "./authentication/AuthContext";
import './App.css'

function ReviewPosts({restaurantId}: {restaurantId: string}) {
    const [ modalOpen, setOpen ] = useState(false);
    const [ postList, setPostList ] = useState<ReviewPost[ ]>([ ]);
    const {user} = useContext(AuthContext);

    useEffect(() =>{
        // call reviews API
        if (user) {
        const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/reviews/'
        axios.get(apiUrl, {params : {restaurantId}}).then((response) =>{
            setPostList(response.data)
        })}
    },[user])

    const addPost = (post: ReviewPost) => {
        setPostList((prevPostList) => {
            return [ ...prevPostList, post ]
        })
        setOpen(false)
    };

    // const postDelete = (i: number) => {
    //     const reviewToRemove = postList[i]
    //     const apiUrl ='https://us-central1-food-crawl-gc.cloudfunctions.net/api/reviews/' + reviewToRemove;
    //     axios.delete(apiUrl)
    //     setPostList((prevPostList) => {
    //         return [...prevPostList.slice(0, i), ...prevPostList.slice(i + 1)];
    //     })
        
    // }
    
    const [page, setPage] = useState(0)
    const pageSize = 5;

    return (
        <div className='newReview'>
            <h1 className='title'>Reviews</h1>
            <div className='mainButton'>
                <button className='modal-btn' onClick={ () => setOpen(true) }>New Review</button>
            </div>
            <div className='postBox'>
                <p className='posted'>
                    {postList.length <= 0 && <div className='noReview'>No Reviews...</div>}
                    {postList.slice(page * pageSize, (page + 1) * pageSize).map( (post, i) => {
                        return (
                            <ReviewInList 
                                post={post}
                                // onDelete={ () => postDelete(i)}
                            />
                        )
                    })}
                </p>
            </div>
            { modalOpen === true && <ReviewForm 
                restaurantId={restaurantId}
                onAdd={addPost} 
                onClose={() => 
                setOpen(false)}/> }

                <p >{page > 0 && <button className="nextprev-btn" onClick={() => {
                    setPage(page - 1)
                }}>Prev</button>}
                {(page + 1) * pageSize < postList.length && <button className="nextprev-btn" onClick={() => {
                    setPage(page + 1)
                }}>Next</button>}</p>
        </div>
    )
};
export default ReviewPosts;

// var film = this.props.data.slice(0, 5).map((item) => {
//     return <FilmItem key={item.id} film={item} />
// });

// return film;

// {postList.slice(postList.post.limit, postList.post.limit + 5).map((post, i) => }