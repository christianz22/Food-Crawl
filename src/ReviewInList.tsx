import ReviewPost from "./ReviewPost"

interface PostProp {
    post : ReviewPost,
    // onDelete: () => void
}

function ReviewInList( { post, } : PostProp ) {
    return (
        <div className='singlePost'>
            <div className='inList'>
                <h2>{post.title}</h2>
                <p>{post.review}</p>
                {/* <button 
                    className='trash' 
                    onClick={onDelete}>Delete
                </button> */}
            </div>
        </div>
    )
};

export default ReviewInList;