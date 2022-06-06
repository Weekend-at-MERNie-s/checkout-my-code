

import React from 'react';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
             
            <p className="card-header">
            {post.title}     
             
            </p>
          
            <div className="card-body">
            <ul class="list-group">
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
            </ul>
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;