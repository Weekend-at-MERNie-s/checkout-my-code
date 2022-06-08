

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import css from './post-list.css'
import { ADD_VOTE } from '../../utils/mutations';
import heart from '../../assets/images/heart.png'
import flag from '../../assets/images/red-flag.png'


const PostList = ({posts, title }) => {
  const [addvote, { error }] = useMutation(ADD_VOTE)
  // if (!posts.length) {
  //   return <h3>No posts Yet</h3>;
  // }
  const handleVote = async (postId) => {
    try {
      await addvote({
        variables: { postId }
      })


    } catch (e) {
      console.log(e)
    }
  }
  return (
    <section id="posts">
      <div>
        <h3>{title}</h3>
        {posts &&
          posts.map(post => (

            <div key={post._id} className="card mb-3">

              <p className="card-header"
                style={{ textAlign: "center", color: "white" }}>
                <Link to={`/post/${post._id}`}> {post.title}</Link>


              </p>

              <div className="card-body">

                <p className="mb-0">{post.postContent}


                </p>

                <p className="mb-0">Repo Link:{post.postRepoLink}
                </p>

                <p className="mb-0">

                  {post.deployedApplication ?
                    `Deployed at:  ` + post.deployedApplication : ''}
                </p>



                <p>
                  {post.username}&nbsp;
                  posted on &nbsp;
                  {post.createdAt}
                </p>
                <img onClick={() => handleVote(post._id)} class="icon" style={{ height: "30px" }}
                  src={heart} alt="heart icon fro likes" />&nbsp; &nbsp;
                <span >
                  {post.voteCount ? post.voteCount : ''} </span>
                &nbsp;  &nbsp;



                <img class="icon" style={{ height: "30px" }} src={flag}
                  alt="heart icon fro likes" />
                <span >
                  {post.flagCount ? post.flagCount : ''} </span>
                &nbsp;  &nbsp;

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