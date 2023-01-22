import { useState, useEffect } from "react";
import { createContext } from "react";
import { getComments } from "../utils/requests";

export const CommentsContext = createContext({
  comments: [],
  isCommentOpen: false,
});

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const toggleIsCommentOpen = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const value = {
    comments,
    setComments,
    isCommentOpen,
    setIsCommentOpen,
    toggleIsCommentOpen,
  };

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(comments);
    };
    fetchComments();
  }, []);

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};
