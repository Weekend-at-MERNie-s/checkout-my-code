

import React from 'react';
import { Link } from 'react-router-dom';
import css from './post-list.css'
import heart from '../../assets/images/love-code.png'


const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <section id="posts">
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
       
          <div key={post._id} className="card mb-3">
           
            <p className="card-header" 
            style={{textAlign: "center", color: "white"}}>
              <Link to={`/post/${post._id}`}> {post.title}</Link>
            
             
            </p>
          
            <div className="card-body">
           
              <p className="mb-0">{post.postContent}
        
              {/* <p>{post.post.postContent}</p> */}
              
                {/* Reactions: {post.reactionCount} || Click to{' '}
                {post.reactionCount ? 'see' : 'start'} the discussion! */}
              </p>
              
              <p className="mb-0">Repo Link:{post.postRepoLink}
              </p>
              <p className="mb-0">Deployed at: {post.deployedApplication}
              </p>

              <p>
            {post.username}&nbsp;       
              posted on &nbsp; 
               {post.createdAt}
            </p>
            <img id="dog" style={{ height: "30px"}} src={heart} alt="cute dog with glasses" />
            <Link to={`/post/${post._id}`}>
            <p className="ternary">
                {/* {post.commentCount} */}
                {post.commentCount ? 'See comment(s)' : 'Make a comment'} 
              </p>
              </Link>
              
            </div>
          </div>
         
        ))}
    </div>
    </section>
  );
};

export default PostList;