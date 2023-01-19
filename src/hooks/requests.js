const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

export const getPosts = async () => {
  const response = await fetch(`${API_URL_POSTS}`);
  return await response.json();
};

export const getComments = async () => {
  const response = await fetch(`${API_URL_COMMENTS}`);
  return await response.json();
};

export const createPost = async (title, body, author, newPostId) => {
  fetch(`${API_URL_POSTS}`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: author,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json, "coming from request");
      return json;
    });
};

export const updatePost = async () => {
  fetch(`${API_URL_POSTS}`, {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "update it",
      body: "try to update it",
      userId: 101,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const deletePost = async (id) => {
  fetch(`${API_URL_POSTS}/${id}`, {
    method: "DELETE",
  }).then((res) => console.log(`post ${id} deleted`));
};
