import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
    // useState returns an array with 2 elements
    // [0] - current value
    // [1] - state updating function
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="CM" body="Check out the full course!" />
            </ul>
        </>
    );
};

export default PostsList;