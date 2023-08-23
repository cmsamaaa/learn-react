import axios from 'axios';
import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

const NewPost = ({ onAddPost }) => {

    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={classes.actions}>
                    <Link to=".." type='button'>
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
};

export default NewPost;

export const action = async ({ request }) => {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await axios.post('http://localhost:8080/posts', postData);

    return redirect('/');
};