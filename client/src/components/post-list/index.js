

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import css from './post-list.css'
import { ADD_VOTE } from '../../utils/mutations';
import { ADD_FLAG } from '../../utils/mutations';
import PostListCard from './post-list-card'
import { QUERY_POSTS } from "../../utils/queries";



const PostList = ({ posts, title }) => {
  const [addvote, { error }] = useMutation(ADD_VOTE)
  const [addFlag] = useMutation(ADD_FLAG)

  // if (!posts.length) {
  //   return <h3>No posts Yet</h3>;
  // }
  const handleVote = async (postId) => {
    console.log(postId)
    try {
      await addvote({
        variables: { postId },
        refetchQueries: [

          { query: QUERY_POSTS }, // DocumentNode object parsed with gql

          'post' // Query name

        ],
      })


    } catch (e) {
      console.log(e)
    }

  }

  const handleFlag = async (postId) => {
    console.log(postId)
    try {
      await addFlag({
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
            < PostListCard post={post} handleVote={handleVote} handleFlag={handleFlag} />


          ))}
      </div>
    </section>
  );
};

export default PostList;