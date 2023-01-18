import { useContext } from "react";
import { Fragment } from "react";

import { PostsContext } from "../../context/posts.context";
import SearchBox from "../../components/search-box/search-box.component";
import Pagination from "../../components/pagination/pagination.component";
import PostList from "../../components/post-list/post-list.component";
import Button from "../../components/button/button.component";

import "./home.styles.scss";

const Home = () => {
  const { posts, currentPage, setCurrentPage, postsPerPage, setPostsPerPage } =
    useContext(PostsContext);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const increasePageHandler = () => {
    if (posts.length <= postsPerPage * currentPage) return;
    setCurrentPage(currentPage + 1);
  };

  const decreasePageHandler = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };

  const showMoreItemsHandler = () => {
    if (posts.length === postsPerPage) return;

    setPostsPerPage(postsPerPage + 5);
  };

  const showLessItemsHandler = () => {
    if (postsPerPage <= 5) return;

    setPostsPerPage(postsPerPage - 5);
  };

  //TODO: implement onSearchChange
  const onSearchChange = () => {};

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
        ></Pagination>
      </div>
      <PostList posts={currentPosts} />

      <div className="button-show-container">
        <Button onClick={showLessItemsHandler}>Show less</Button>
        <Button onClick={showMoreItemsHandler}>Show more</Button>
      </div>
    </Fragment>
  );
};

export default Home;
