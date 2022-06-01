import React from "react";
import css from './style.css'
import addPost from '../../javascript/add-post'

function UserPage() {
    return (
<section>
    <div className='new-post'>
        <h1>Create New Post</h1>
        <form className='post-form'>
                <label for="post-title">Title</label>
                <input type="text" id="post-title" name="post-title"/>
                <label for="content">Content</label>
                <textarea id="content" name="content"></textarea>
                <button type="submit" class='create-btn'>Justify my Code</button>
        </form>
    </div>
    <div className='old-posts'>

    </div>
</section>

    )
}
 export default UserPage;