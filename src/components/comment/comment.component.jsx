import "./comment.styles.scss";

const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment-container">
      <span className="comment-name">
        &bull; {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      {/* <span className="comment-email">{email.toLowerCase()}</span> */}
      {/* <span className="comment-body">{body}</span> */}
    </div>
  );
};

export default Comment;
