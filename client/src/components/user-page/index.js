import React, {useState, useEffect} from "react";
import css from "./style.css";
import SinglePost from "../single-post";
import dog from '../../assets/images/dog-cartoon.png'


function UserPage() {

    const [title, setTitle] = useState('');
    const [github, setGithub]= useState('');
    const [deploy, setDeploy]= useState('');
    const [justify, setJustify]= useState('');

    const [postList, setPostList]= useState([]);
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log('title', title)
        console.log('github', github)
        console.log('deploy', deploy)
        console.log('justify', justify)

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
        <form className="post-form" onSubmit={handleSubmit}>
          <h1>Create New Post</h1>
          {/* <div className='input'> */}
            <div>
             <label htmlFor="post-title">Title:</label>
              <input className="form-input" type="text" id="post-title" name="post-title" onChange={e=> setTitle(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="github">GitHub Repo Link:</label>
              <input className="form-input" id="content" name="content" onChange={e=> setGithub(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="deploy">Deployed App Link:</label>
              <input className="form-input" id="content" name="content" onChange={e=> setDeploy(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="content">Justify my post:</label>
              <textarea className="form-input" id="justify" name="content" onChange={e=> setJustify(e.target.value)}></textarea>
             </div>
             <div className='merge'>
             <img id="dog" style={{ height: "85px", width: "85px" }} src={dog} alt="cute dog with glasses" />

                <button type="submit" className='btn'>
                Merge my code
                </button>
            </div>
        </form>

      {/* </div> */}
        <SinglePost />
        {/* display list post- need to use .map method (postList) */}
        {/* <div>
        <button className='btn'>EDIT POST</button>
        </div> */}
    </section>
  );
}
export default UserPage;
