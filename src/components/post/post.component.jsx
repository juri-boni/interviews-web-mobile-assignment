import { useContext, Fragment } from "react";
import { PostsContext } from "../../context/posts.context";
import Comment from "../comments/comments.component";
import { deletePost } from "../../hooks/requests";
import "./post.styles.scss";

const Post = ({ post }) => {
  const { body, title, id } = post;
  const { removePostFromApp } = useContext(PostsContext);

  const deletePostHandler = () => {
    deletePost(id);
    // alert(`post ${id} deleted`);
    removePostFromApp(post);
  };

  return (
    <Fragment>
      <div className="post-container">
        <div className="title-body-container">
          <h2 className="post-title"> {title}</h2>
          <p className="post-body">{body} </p>
        </div>
        <div className="remove-button-container">
          <span className="remove-button" onClick={deletePostHandler}>
            &#10005;
          </span>
        </div>
      </div>
      <div className="comment-button-container">
        <span className="comment-button">&#65088;</span>
      </div>
      {/* <Comment /> */}
    </Fragment>
  );
};

export default Post;
