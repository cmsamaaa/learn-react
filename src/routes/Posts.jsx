import axios from 'axios';
import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

const Posts = () => {

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};

export default Posts;

export const loader = async () => {
  const response = await axios.get('http://localhost:8080/posts');
  const resData = await response.data;
  return resData.posts;
};