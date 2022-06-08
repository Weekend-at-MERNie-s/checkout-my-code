import React from "react";
import css from "./style.css";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from "../../utils/queries";
import PostList from '../post-list'
import glass from '../../assets/images/favicon.png'


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
        <>
          <h3 style={{textAlign: "center", paddingTop:"10px", color: "#774c2a"}}>Check this out  <img id="glass" src={glass} /></h3> 
         
        {/* <PostList posts={posts} /> */}
        <PostList posts={posts} postId={posts._id} />
      
    
      </>
      
      )}
    </div>
  

  </div>



    );
}
  
export default Main;
