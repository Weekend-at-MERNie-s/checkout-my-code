import React from "react";
import css from "./style.css";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from "../../utils/queries";
import PostList from '../post-list'


function Main() {

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  return (
  
    <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts} title="Check this out..." />
      )}
    </div>
  </div>

    );
}
  
export default Main;
