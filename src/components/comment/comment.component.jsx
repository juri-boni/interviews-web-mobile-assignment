import "./comment.styles.scss";

const Comment = ({ comment }) => {
  const { name, email, body } = comment;
  console.log(comment);

  return (
    <div className="comment-container">
      <span className="comment-name">{name}</span>
    </div>
  );
};

export default Comment;
