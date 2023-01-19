import { useContext, Fragment } from "react";
import { PostsContext } from "../../context/posts.context";
import { CommentsContext } from "../../context/comments.context";
import CommentsList from "../comments-list/comments-list.component";
import { deletePost } from "../../hooks/requests";
import "./post.styles.scss";

const Post = ({ post }) => {
  const { body, title, id } = post;
  const { removePostFromApp } = useContext(PostsContext);
  const { isCommentOpen, setIsCommentOpen } = useContext(CommentsContext);

  const deletePostHandler = () => {
    deletePost(id);
    // alert(`post ${id} deleted`);
    removePostFromApp(post);
  };

  //TODO: fix openCommentHandler: it has to open only the relative comment section.
  const openCommentsHandler = () => setIsCommentOpen(!isCommentOpen);

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
        {isCommentOpen ? (
          <span className="comment-button" onClick={openCommentsHandler}>
            &#65087;
          </span>
        ) : (
          <span className="comment-button" onClick={openCommentsHandler}>
            &#65088;
          </span>
        )}
      </div>
      {isCommentOpen && <CommentsList />}
    </Fragment>
  );
};

export default Post;
