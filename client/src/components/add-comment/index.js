import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_COMMENT } from "../../utils/mutations";

const CommentForm = ({ postId }) => {
  const [addcomment, { error }] = useMutation(ADD_COMMENT);
  const [commentText, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addcomment({
        variables: { commentText, postId },
      });
      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form
        class="col-md-12"
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          id="addForm"
          placeholder="Help somebody out..."
          value={commentText}
          className="form-input"
          onChange={handleChange}
        ></textarea>

        <button
          style={{ float: "left" }}
          className="btn col-md-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && <span className="ml-2">Something went wrong...</span>}
    </div>
  );
};

export default CommentForm;
