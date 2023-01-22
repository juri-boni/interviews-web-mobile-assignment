import { useState, useContext } from "react";
import { createPost } from "../../hooks/requests";
import { PostsContext } from "../../context/posts.context";
import Button from "../../components/button/button.component";
import "./create.styles.scss";

const defaultFormFields = {
  title: "",
  body: "",
  author: "",
};

const Create = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, body, author } = formFields;
  const newPostId = posts.length + 1;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(title, body, author);
      const newPost = {
        title: title,
        body: body,
        userId: author,
        id: newPostId,
      };

      setPosts([...posts, newPost]);

      resetFormFields();
    } catch (error) {
      console.error("error in creating new post:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add a New Post</h2>
        <label>Name:</label>
        <input
          onChange={handleChange}
          name="author"
          value={author}
          type="text"
          required
        />
        <label>Title:</label>
        <input
          onChange={handleChange}
          name="title"
          value={title}
          type="text"
          required
        />
        <label>Post:</label>
        <textarea
          onChange={handleChange}
          name="body"
          value={body}
          required
        ></textarea>

        <Button type="submit">Add Post</Button>
      </form>
    </div>
  );
};

export default Create;
