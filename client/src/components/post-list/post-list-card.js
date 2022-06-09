import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heart from '../../assets/images/heart.png'
import flag from '../../assets/images/red-flag.png'

const PostCard = ({ post, handleFlag, handleVote }) => {
    // let [voteCount, setVoteCount] = useState(post.voteCount)
    return (
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
                <img onClick={() => {
                    handleVote(post._id,);

                }} class="icon" style={{ height: "30px" }}
                    src={heart} alt="heart icon fro likes" />&nbsp; &nbsp;
                <span >

                    {post.voteCount ? post.voteCount : ''} </span>
                &nbsp;  &nbsp;



                <img onClick={() => handleFlag(post._id)} class="icon" style={{ height: "30px" }} src={flag}
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
    )
}

export default PostCard;