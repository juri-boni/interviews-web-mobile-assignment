import { useContext, useEffect } from "react";
import { Fragment } from "react";

import { PostsContext } from "../../context/posts.context";
import SearchBox from "../../components/search-box/search-box.component";
import Pagination from "../../components/pagination/pagination.component";
import PostList from "../../components/post-list/post-list.component";
import Button from "../../components/button/button.component";

import "./home.styles.scss";

const Home = () => {
  const {
    posts,
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
  } = useContext(PostsContext);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const newFilteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchField);
    });
    setFilteredPosts(newFilteredPosts);
    setCurrentPage(1);
  }, [posts, searchField]);

  const increasePageHandler = () => handleIncreasePage();
  const decreasePageHandler = () => handleDecreasePage();
  const showLessHandler = () => handleShowLess();
  const showMoreHandler = () => handleShowMore();

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Fragment>
      <div className="pagination-container">
        <SearchBox
          placeholder="search by title"
          onChangeHandler={onSearchChange}
        />
        <Pagination
          increasePageHandler={increasePageHandler}
          decreasePageHandler={decreasePageHandler}
          currentPage={currentPage}
          posts={posts}
          postsPerPage={postsPerPage}
        ></Pagination>
      </div>
      <PostList posts={currentPosts} />

      <div className="button-show-container">
        <Button onClick={showLessHandler}>Show less</Button>
        <Button onClick={showMoreHandler}>Show more</Button>
      </div>
    </Fragment>
  );
};

export default Home;
