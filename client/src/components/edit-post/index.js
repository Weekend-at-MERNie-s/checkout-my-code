import React from "react";
import css from "./style.css";

function EditPost() {
  return (
    <section>
      <div className="edit-post">
        <h1>Edit Post</h1>
        <form id="edit-post-form" className="edit-post">
          <input type="hidden" name="post-id" />
          <label for="post-title">Title:</label>
          <input name="post-title" type="text" />
          <label for="post-content">Content:</label>
          <textarea name="post-content"></textarea>
          <div className="edit-btns">
            <button type="submit">Save post</button>
            <button type="button">Delete post</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default EditPost;
