import { useContext } from "react";
import { Fragment } from "react";

import { PostsContext } from "../../context/posts.context";
import PostList from "../../components/post-list/post-list.component";

import "./home.styles.scss";

const Home = () => {
  const { posts, currentPage, setCurrentPage, postsPerPage, setPostsPerPage } =
    useContext(PostsContext);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(postsPerPage, "postsPerPage");
  console.log(currentPage, "currentPage");
  console.log(postsPerPage * currentPage, "multipl");

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

  return (
    <Fragment>
      <div className="arrows-container">
        <span className="arrow-button" onClick={decreasePageHandler}>
          &#10094;
        </span>
        <span className="page-number">page {currentPage}</span>
        <span className="arrow-button" onClick={increasePageHandler}>
          &#10095;
        </span>
      </div>
      <PostList posts={currentPosts} />
      <div className="button-container">
        <button className="button-show" onClick={showLessItemsHandler}>
          Show less
        </button>
        <button className="button-show" onClick={showMoreItemsHandler}>
          Show more
        </button>
      </div>
    </Fragment>
  );
};

export default Home;
