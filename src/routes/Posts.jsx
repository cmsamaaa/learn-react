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
