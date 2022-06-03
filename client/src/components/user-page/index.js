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

        // await fetch.post  (title, github, deploy, justify)

        // setTitle('');
        // setGithub('');
        // setDeploy('');
        // setJustify('');
    }
   
useEffect(() => {
  posts()
}, [])
const posts = async ()=>{
  const response = await fetch('user-page');
  setPostList(await response.json())
}

    // useEffect(() => {
    //     let result = await fetch.get('/user-page')
    //     setPostList(await result.json())
    //   }, []);
      // if (response.ok) {
      //   document.location.replace('/');
      // } else {
      //   alert(response.statusText);
      // }
  return (
    <section className='user-post-page'>
      <form className="post-form" onSubmit={handleSubmit}>
          <h1>Create New Post</h1>
            <div>
             <label htmlFor="post-title">Title:</label>
              <input className="form-input" type="text" id="post-title" name="post-title" onChange={e=> setTitle(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="github">GitHub Repo Link:</label>
              <input className="form-input" id="github" name="github" onChange={e=> setGithub(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="deploy">Deployed App Link:</label>
              <input className="form-input" id="appLink" name="appLink" onChange={e=> setDeploy(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="content">Justify my post:</label>
              <textarea className="form-input" id="justify" name="justify" onChange={e=> setJustify(e.target.value)}></textarea>
             </div>
             <div className='merge'>
             <img id="dog" style={{ height: "85px", width: "85px" }} src={dog} alt="cute dog with glasses" />

                <button type="submit" className='btn'>
                Merge my code
                </button>
            </div>
      </form>

      <div className='postList'>
        <h1>post list displays below</h1>
        <ol className='list'>
          {postList.map((data)=>{
            return(
              <li className='list-item' key={data.id}>{data.handleSubmit}</li>
            )
          })}
        </ol>
      </div>

        {/* display list post- need to use .map method (postList) */}
    </section>
  );
}
export default UserPage;
