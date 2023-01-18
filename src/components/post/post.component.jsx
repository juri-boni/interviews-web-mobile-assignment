import "./post.styles.scss";

import { deletePost } from "../../hooks/requests";

const Post = ({ post }) => {
  const deletePostHandler = () => {
    deletePost(id);
    alert(`post ${id} deleted`);
  };

  const { body, title, id } = post;

  return (
    <div className="post-container">
      <div className="title-container">
        <h2 className="post-title"> {title}</h2>
        <span className="remove-button" onClick={deletePostHandler}>
          &#10005;
        </span>
      </div>
      <p className="post-body">{body} </p>
    </div>
  );
};

export default Post;
