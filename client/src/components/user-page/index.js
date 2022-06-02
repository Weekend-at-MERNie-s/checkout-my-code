import React, {useState, useEffect} from "react";
import css from "./style.css";
import EditPost from "../edit-post";

function UserPage() {

    const [title, setTitle] = useState('');
    const [content, setContent]= useState('');
    const [postList, setPostList]= useState([]);
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log('title', title)
        console.log('content', content)

        //await fetch.post (title, content)

        // setTitle('');
        // setContent('');
    }
    
    // useEffect - grab data from the backend so you can display
    // useEffect(() => {
    //     let result = await fetch.get('url route')
    //     setPostList(result)
    //   }, []);

  return (

    <section className='user-post-page'>
      <div className="new-post">
        <h1>Create New Post</h1>
        <form className="post-form" onSubmit={handleSubmit}>
          <label htmlFor="post-title">Title:</label>
          <input type="text" id="post-title" name="post-title" onChange={e=> setTitle(e.target.value)}/>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" onChange={e=> setContent(e.target.value)}></textarea>
          <button type="submit" className='btn'>
            Justify my Code
          </button>
        </form>
      </div>
        <EditPost />
        {/* <h1>View your previous posts</h1>  */}
        {/* display list post- need to use .map method (postList) */}
    </section>
  );
}
export default UserPage;
