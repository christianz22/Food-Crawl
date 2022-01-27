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
        setOpen(false)
    };

    const postDelete = (i: number) => {
        setPostList((prevPostList) => {
            return [...prevPostList.slice(0, i), ...prevPostList.slice(i + 1)];
        })
        
    }
    
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
                                onDelete={ () => postDelete(i)}
                            />
                        )
                    })}
                </p>
                <p>{page > 0 && <button onClick={() => {
                    setPage(page - 1)
                }}>Prev</button>}
                {(page + 1) * pageSize < postList.length && <button onClick={() => {
                    setPage(page + 1)
                }}>Next</button>}</p>
            </div>
            { modalOpen === true && <ReviewForm 
                onAdd={addPost} 
                onClose={() => 
                setOpen(false)}/> }
        </div>
    )
};
export default ReviewPosts;

// var film = this.props.data.slice(0, 5).map((item) => {
//     return <FilmItem key={item.id} film={item} />
// });

// return film;

// {postList.slice(postList.post.limit, postList.post.limit + 5).map((post, i) => }