import React from "react";

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import css from '../post-list/post-list.css'
import Comment from "../comment";
import CommentForm from "../add-comment";
import Auth from '../../utils/auth'
import dog from '../../assets/images/dog-cartoon.png'

function SinglePost(props) {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section id="posts">
        <div>
          <div className="card mb-3">
            <p className="card-header"
              style={{ textAlign: "center", color: "white" }}>
              <span style={{ fontWeight: 700 }} className="text-light">
                {post.title}
              </span>{' '}

            </p>
            <div className="card-body">

              <p className="mb-0">{post.postContent} /</p>
              <p className="mb-0">Repo Link:{post.postRepoLink}
              </p>
              <p className="mb-0">Deployed at: {post.deployedApplication}
              </p>
              <p>
                {post.username}&nbsp;
                posted on &nbsp;
                {post.createdAt}
              </p>


            </div>
          </div>
        </div>
        {post.commentCount > 0 && <Comment comments={post.comments} />}
        {!Auth.loggedIn()&& <p style={{color:"#774c2a", fontWeight: "bold"}}>Only logged in users can comment, please sign up or login.</p>}
        {Auth.loggedIn() && <CommentForm postId={post._id} />}
      </section>
     <div>
      <img id="dog" style={{ height: "200px", width: "200px", float: "right" }} src={dog} alt="cute dog with glasses" />
      </div>
    </>
  );
}
export default SinglePost;
