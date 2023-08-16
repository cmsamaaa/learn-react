import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = () => {
    return (
        <ul className={classes.posts}>
            <Post author="Chun Mun" body="React.js is awesome!" />
            <Post author="CM" body="Check out the full course!" />
        </ul>
    );
};

export default PostsList;