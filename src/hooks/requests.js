const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const response = await fetch(`${API_URL}`);
  return await response.json();
};

export const createPost = async (title, body, author, newPostId) => {
  fetch(`${API_URL}`, {
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
  fetch(`${API_URL}`, {
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
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => console.log(`post ${id} deleted`));
};
