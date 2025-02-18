import "./pagination.styles.scss";

const Pagination = ({
  increasePageHandler,
  decreasePageHandler,
  currentPage,
  posts,
  postsPerPage,
}) => {
  return (
    <div className="arrows-container">
      {currentPage > 1 && (
        <span className="arrow-button" onClick={decreasePageHandler}>
          &#10094;
        </span>
      )}
      <span className="page-number">page {currentPage}</span>

      {posts.length > postsPerPage * currentPage && (
        <span className="arrow-button" onClick={increasePageHandler}>
          &#10095;
        </span>
      )}
    </div>
  );
};

export default Pagination;
