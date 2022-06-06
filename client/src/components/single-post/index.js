import React from "react";
import css from "./style.css";
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
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
    </section>
  );
}
export default SinglePost;
