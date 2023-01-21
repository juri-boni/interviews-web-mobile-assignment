import { createContext, useState, useEffect } from "react";

import { getPosts } from "../hooks/requests";

const removePost = (posts, postToRemove) => {
  return posts.filter((post) => post.id !== postToRemove.id);
};

const handleOpenedPosts = (openedPosts, selectedPost) => {
  const existingOpenedPost = openedPosts.find(
    (openedPost) => openedPost.id === selectedPost.id
  );
  if (existingOpenedPost) {
    return openedPosts.filter(
      (openedPost) => openedPost !== existingOpenedPost
    );
  } else {
    return [...openedPosts, selectedPost];
  }
};

export const PostsContext = createContext({
  posts: [],
  filteredPosts: [],
  openedPosts: [],
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
  const [openedPosts, setOpenedPosts] = useState([]);

  console.log(openedPosts);

  const openedPostsHandler = (selectedPost) => {
    setOpenedPosts(handleOpenedPosts(openedPosts, selectedPost));
  };

  const removePostFromApp = (postToRemove) => {
    setPosts(removePost(posts, postToRemove));
  };

  const handleIncreasePage = () => {
    if (posts.length <= postsPerPage * currentPage) return;
    setCurrentPage(currentPage + 1);
  };

  const handleDecreasePage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleShowMore = () => {
    if (posts.length === postsPerPage) return;
    setPostsPerPage(postsPerPage + 5);
  };

  const handleShowLess = () => {
    if (postsPerPage <= 5) return;
    setPostsPerPage(postsPerPage - 5);
  };

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
    handleIncreasePage,
    handleDecreasePage,
    handleShowMore,
    handleShowLess,
    removePostFromApp,
    openedPosts,
    setOpenedPosts,
    openedPostsHandler,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
