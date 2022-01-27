import { useState } from "react";
import ReviewPost from "./ReviewPost";
import ReviewInList from "./ReviewInList";
import ReviewForm from "./ReviewPostForm";

function ReviewPosts() {
    const [ modalOpen, setOpen ] = useState(false);
    const [ postList, setPostList ] = useState(
        [{
            title: 'Hello -- testing, testing!',
            review: 'Does this thing actually work??'
        }]);

    const addPost = (post: ReviewPost) => {
        setPostList((prevPostList) => {
            return [ ...prevPostList, post ]
        })
    };

    const postDelete = (i: number) => {
        setPostList((prevPostList) => {
            return [...prevPostList.slice(0, i), ...prevPostList.slice(i + 1)];
        })
        
    }

    return (
        <div className='newReview'>
            <h1 className='title'>Reviews</h1>
            <div className='mainButton'>
                <button className='modal-btn' onClick={ () => setOpen(true) }>New Review</button>
            </div>
            <div className='postBox'>
                <p className='posted'>
                    {postList.length <= 0 && <div className='noReview'>No Reviews...</div>}
                    {postList.map( (post, i) => {
                        return (
                            <ReviewInList 
                                post={post}
                                onDelete={ () => postDelete(i)}
                            />
                        )
                    })}
                </p>
            </div>
            { modalOpen === true && <ReviewForm 
                onAdd={addPost} 
                onClose={() => 
                setOpen(false)}/> }
        </div>
    )
};

export default ReviewPosts;