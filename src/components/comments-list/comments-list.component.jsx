import Comment from "../comment/comment.component";

import "./comments-list.styles.scss";

const CommentsList = ({ comments, id }) => {
  const filteredComments = comments.filter((comment) => comment.postId === id);

  return (
    <div className="comments-container">
      {filteredComments.map((comment) => {
        const { id } = comment;
        return <Comment key={id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentsList;
