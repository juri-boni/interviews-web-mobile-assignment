import Post from "../post/post.component";
import CommentsList from "../comments-list/comments-list.component";
import "./post-list.styles.scss";

const PostList = ({ posts, openedPosts, comments }) => {
  return (
    <div className="post-list">
      {posts.map((post) => {
        const { id } = post;
        return <Post key={id} post={post} openedPosts={openedPosts} />;
      })}
      {/* {openedPosts.map((post) => {
        const { id } = post;
        return <CommentsList key={id} comments={comments} id={id} />;
      })} */}
    </div>
  );
};

export default PostList;
