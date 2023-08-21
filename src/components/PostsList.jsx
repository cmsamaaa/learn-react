import { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:8080/posts');
            setPosts(response.data.posts);
        };

        fetchPosts();
    }, []);

    const addPostHandler = (postData) => {
        // fetch('http://localhost:8080/posts', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(postData)
        // });

        axios.post('http://localhost:8080/posts', postData)
            .then((response) => {
                setPosts((existingPosts) => [postData, ...existingPosts]);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, idx) => <Post key={idx} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
};

export default PostsList;