import { supabase } from "../client";
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const CreateComment = (props) => {
    const { id } = useParams(); // get the post ID from the URL
    const [comment, setComment] = useState({post: id, comment_content: "", author: ""});

    const createComment = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('RedditComment')
            .insert({post: comment.post, comment_content: comment.comment_content, author: comment.author});
        console.log('Data:', data);
        console.log('Error:', error);
            if (error) {
            console.error('Error: ', error);
        } else {
            console.log('Inserted data: ', data);
            setComment({post: id, comment_content: "", author: ""});
            props.onNewComment(data[0]);
            // window.location = "/";
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setComment( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div className="CreateComments">
            <form>
            <label htmlFor="text">Comment: </label>
            <input type="text" id="comment_content" name="comment_content" value={comment.comment_content} onChange={handleChange} />
            <br />
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name="author" value={comment.author} onChange={handleChange} />
            <br />
            <input type="submit" value="Create" onClick={createComment} />
            </form>
        </div>
    )
}

export default CreateComment;