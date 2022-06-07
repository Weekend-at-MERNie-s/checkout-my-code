import React, { useState, useEffect } from "react";
import css from "./style.css";
import SinglePost from "../single-post";
import dog from "../../assets/images/dog-cartoon.png";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import PostList from "../post-list";
import { Link } from "react-router-dom";
import { QUERY_POST } from "../../utils/queries";

function UserPage() {
  const [title, setTitle] = useState("");
  const [github, setGithub] = useState("");
  const [deploy, setDeploy] = useState("");
  const [justify, setJustify] = useState("");

  const [postList, setPostList] = useState([]);
  const [addPost, { error }] = useMutation(ADD_POST);

  console.log("front error", error);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title", title);
    console.log("github", github);
    console.log("deploy", deploy);
    console.log("justify", justify);

    try {
      await addPost({
        variables: {
          title,
          postRepoLink: github,
          deployedApplication: deploy,
          postContent: justify,
        },
      });
    } catch (error) {
      console.log("error", error);
    }

    setTitle("");
    setGithub("");
    setDeploy("");
    setJustify("");
  };

  // console.log(data,loading,error)

  useEffect(() => {
    posts();
  }, []);

  const posts = async () => {
    const response = await fetch("user-page");
    setPostList(await response.json());
  };

  // const { loading, data } = useQuery(QUERY_POST);
  //   const userPostList = data?.posts || [];
  //   console.log(userPostList);

  // useEffect(() => {
  //     let result = await fetch.get('/user-page')
  //     setPostList(await result.json())
  //   }, []);
  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert(response.statusText);

  return (
    <section className="user-post-page">
      <form className="post-form" onSubmit={handleSubmit}>
        <h1>Create New Post</h1>
        <div>
          <label htmlFor="post-title">Title:</label>
          <input
            className="form-input"
            type="text"
            id="post-title"
            name="post-title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub Repo Link:</label>
          <input
            className="form-input"
            id="github"
            name="github"
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="deploy">Deployed App Link:</label>
          <input
            className="form-input"
            id="appLink"
            name="appLink"
            onChange={(e) => setDeploy(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Justify my post:</label>
          <textarea
            className="form-input"
            id="justify"
            name="justify"
            onChange={(e) => setJustify(e.target.value)}
          ></textarea>
        </div>
        <div className="merge">
          <img
            id="dog"
            style={{ height: "85px", width: "85px" }}
            src={dog}
            alt="cute dog with glasses"
          />
          <button type="submit" className="btn">
            Merge my code
          </button>
        </div>
      </form>

      <div className="postList">
        <ol className="list">
          {/* {postList.map((data)=>{
            return(
              <div key={post._id} className="card mb-3">
                <p className="card-header" 
                  style={{textAlign: "center", color: "white"}}>
                  <Link to={`/post/${post._id}`}> {post.title}</Link>
                </p>
                <div className="card-body">
                  <p className="mb-0">{post.postContent}
                  </p>
                  <p className="mb-0">Repo Link:{post.postRepoLink}
                  </p>
                  <p className="mb-0">Deployed at: {post.deployedApplication}
                  </p>
                  <p>{post.username}&nbsp; posted on &nbsp; 
                    {post.createdAt}</p>
                  <Link to={`/post/${post._id}`}>
                  <p className="ternary">
                  {post.commentCount ? 'See comment(s)' : 'Make a comment'} 
                  </p>
                  </Link>
                </div>
              <li className='list-item' key={data.id}>{data.handleSubmit}</li>
              </div>
              )
          })}
              <PostList posts={posts} /> */}
        </ol>
      </div>
    </section>
  );
}
export default UserPage;
