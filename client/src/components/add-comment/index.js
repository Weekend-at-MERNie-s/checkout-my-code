import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {

    const [addcomment, { error }] = useMutation(ADD_COMMENT)
    const [commentText, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0)

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length)
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addcomment({
                variables: { commentText, thoughtId }
            })
            setBody('');
            setCharacterCount(0);

        } catch (e) {
            console.log(e)
        }
    };
    return (
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Leave a comment to this thought..."
                    value={commentText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>

                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
            {error && <span className="ml-2">Something went wrong...</span>}
        </div>
    );
};

export default CommentForm;