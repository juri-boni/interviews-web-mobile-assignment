import { createContext, useState, useEffect } from "react";

import { getPosts } from "../hooks/requests";

export const PostsContext = createContext({
  posts: [],
  currentPage: 1,
  postsPerPage: 10,
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const value = {
    posts,
    setPosts,
    currentPage,
    setCurrentPage,
    postsPerPage,
    setPostsPerPage,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
