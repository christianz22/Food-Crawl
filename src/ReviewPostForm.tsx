import { useState } from "react";

interface openClose {
    onAdd : Function,
    onClose : Function
}
// this is the modal that pops up after selecting add review on details page
function ReviewForm({ onAdd, onClose }: openClose) {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    return (
        // will need to add modal class CSS
        <div className='modal-bg'>
            <div className='modal'>
                <form className= 'modal-form' onSubmit={(e) => {
                    e.preventDefault();
                    onAdd({ title, review })
                }}>
                    <button 
                        className='closeBtn' 
                        onClick={ () => onClose() }>Close
                    </button>
                    <label 
                        className='titleHdr' 
                        htmlFor='title'>Title:
                    </label>
                    <input 
                        onChange={e => setTitle(e.target.value)} 
                        name='title' 
                        id='title' 
                        type='text'>
                    </input>
                    <label 
                        className='reviewHdr' 
                        htmlFor='review'>Review:
                    </label>
                    <textarea 
                        onChange={e => setReview(e.target.value)} 
                        name='review' 
                        id='review'>
                    </textarea>
                    <button 
                        type='submit' 
                        className='addPost-btn'>Add Review
                    </button>
                </form>
            </div>
        </div>
    )
};

export default ReviewForm;