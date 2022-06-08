import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.css'

const Comment = ({ comments }) => {
    return (
        <section style={{ margin: "auto", justifyContent: "center" }}
            id="comments">
           
                <div class="row">
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h4 style= {{color: "#774c2a", textAlign:'center'}} 
                                class="card-title">Recent Comments</h4>
                                <h6 style= {{color: "#774c2a", textAlign:'center'}}
                                class="card-subtitle">Latest Comments by users</h6> </div>
                            <div class="d-flex flex-row comment-row">
                            </div>

                            {comments &&
                                comments.map(comment => (
                                    <p id="comment"
                                        className="comment-text w-100" key={comment._id}>
                                             {comment.commentText} {''}< br />
                                        {comment.username} on {comment.createdAt} 
                                       
                                    </p>
                                ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Comment;