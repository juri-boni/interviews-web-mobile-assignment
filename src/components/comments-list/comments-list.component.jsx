import Comment from "../comment/comment.component";

import "./comments-list.styles.scss";

const CommentsList = () => {
  return (
    <div className="comments-container">
      <Comment />
    </div>
  );
};

export default CommentsList;
