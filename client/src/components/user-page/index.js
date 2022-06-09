import React, { useState, useEffect } from "react";
import css from "./style.css";
import SinglePost from "../single-post";
import dog from '../../assets/images/dog-cartoon.png'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from "../../utils/queries";
import Auth from '../../utils/auth'
import PostList from '../post-list'

function UserPage() {
  const [title, setTitle] = useState('');
  const [github, setGithub] = useState('');
  const [deploy, setDeploy] = useState('');
  const [justify, setJustify] = useState('');

  const [postList, setPostList] = useState([]);
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);
  const { loading: loadingPosts, data: postData } = useQuery(QUERY_POSTS);
  const allPosts = postData?.posts || [];
  console.log('allPosts', allPosts);


  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      await addPost({
        variables: {
          title, postRepoLink: github,
          deployedApplication: deploy, postContent: justify,
         

        }
      })

      setTitle('');
      setGithub('');
      setDeploy('');
      setJustify('');
    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {

  }, [])
  const posts = async () => {
    const response = await fetch('user-page');
    setPostList(await response.json())
    
  }

  // useEffect(() => {
  //     let result = await fetch.get('/user-page')
  //     setPostList(await result.json())
  //   }, []);
  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert(response.statusText);

  return (
    <>

      <div className='user-post-page'>


        
        <div>
        {!Auth.loggedIn() && <p style={{ color: "#774c2a", fontWeight: "light" }}>You need to be logged in, friend!</p>}
          <form className="post-form" onSubmit={handleSubmit}>
            <h1>Create New Post</h1>
            <div>
              <label htmlFor="post-title">Title:</label>
              <input className="form-input"  placeholder=" Please enter the name of your project"
               type="text"  value={title}id="post-title" name="post-title"
               onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="github">GitHub Repo Link:</label>
              <input className="form-input" placeholder=" Please enter the link for your repo"
              id="github" value={github}name="github"
               onChange={e => setGithub(e.target.value)} />
            </div>
            <div>
              <label htmlFor="deploy">Deployed App Link:</label>
              <input className="form-input" placeholder="Please enter the link for deployed app"
               id="appLink"value={deploy} name="appLink" 
              onChange={e => setDeploy(e.target.value)} />
            </div>
            <div>
              <label htmlFor="content">Justify my post:</label>
              <textarea className="form-input" id="justify" 
               placeholder="What else would you like to share about your project?"
              value={justify}name="justify" 
              onChange={e => setJustify(e.target.value)}></textarea>
            </div>
            <div className='merge'>
              <img id="dog" style={{ height: "85px", width: "85px" }} src={dog} alt="cute dog with glasses" />

              <button type="submit" className='btn'>
                Merge my code
              </button>
            </div>
          </form>
        </div>

        <div id="post">
          {loadingPosts ? (
            <div>Loading...</div>
          ) : (
            // <h1>post list displays below</h1>
            // <ol className='list'>
            //   {allPosts.map((data)=>{
            //     return(
            //       <li className='list-item' key={data._id}>{data.title}</li>
            //     )
            //   })}
            // </ol>
            <PostList posts={allPosts} />
          )}


          {/* display list post- need to use .map method (postList) */}

        </div>
      </div>


    </>

  );
}
export default UserPage;
