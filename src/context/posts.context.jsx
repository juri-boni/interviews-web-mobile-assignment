import { createContext, useState, useEffect } from "react";

import { getPosts } from "../hooks/requests";

export const PostsContext = createContext({
  posts: [],
  filteredPosts: [],
  currentPage: 1,
  postsPerPage: 10,
  searchField: "",
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchField, setSearchField] = useState("");

  console.log(searchField);
  console.log(filteredPosts);

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
    filteredPosts,
    setFilteredPosts,
    searchField,
    setSearchField,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
