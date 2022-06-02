import React, {useState, useEffect} from "react";
import css from "./style.css";

// edit post function
function EditPost() {
   
  return (
    <section>
      <div className="edit-post">
        <h1>Edit Post</h1>
        <form className="edit-form">
          <label htmlFor="post-title">Title:</label>
          <input type="text" id="post-title" name="post-title" />
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content"></textarea>
          <button type="submit" className='btn'>Commit</button>
          <button type="submit" className='btn'>Delete</button>
        </form>
      </div>
    </section>
  );
}
export default EditPost;
