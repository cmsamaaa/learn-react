import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = () => {
    const posts = useLoaderData();

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