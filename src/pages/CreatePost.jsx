import { supabase } from "../client";
import Card from "../components/Card";
import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const CreatePost = () => {
    const [post, setPost] = useState({id: null, title: "", content: "", image: ""});
   
    const createPost = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('Reddit')
            .insert({title: post.title, content: post.content});
        if (error) {
            console.error('Error: ', error);
        } else {
            console.log('Inserted data: ', data);
            window.location = "/";
        }
    }

    // const deletePost = async (event) => {
    //     event.preventDefault();
    //     await supabase
    //         .from('Reddit')
    //         .delete()
    //         .eq('id', id)

    //     window.location = "/";
    // }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div className="CreatePosts">
            <form>
                <label htmlFor="title">Title *: </label>
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} />
                <br />
                <label htmlFor="content">Content: </label>
                <input type="text" id="content" name="content" value={post.content} onChange={handleChange} />
                <br />
                <label htmlFor="image">Image: </label>
                <input type="text" id="image" name="image" value={post.image} onChange={handleChange} />
                <br />
                
                {/* <label htmlFor="year">Class Year: </label>
                <input type="radio" id="year1" name="year" value="1" checked={role.year === "1"} onChange={handleChange} />
                <label htmlFor="year1">1</label>
                <input type="radio" id="year2" name="year" value="2" checked={role.year === "2"} onChange={handleChange} />
                <label htmlFor="year2">2</label>
                <input type="radio" id="year3" name="year" value="3" checked={role.year === "3"} onChange={handleChange} />
                <label htmlFor="year3">3</label>
                <input type="radio" id="year4" name="year" value="4" checked={role.year === "4"} onChange={handleChange} />
                <label htmlFor="year4">4</label> */}
                <p style={{color: 'red', fontStyle: 'italic'}}>* is required</p>
                <input type="submit" value="Create" onClick={createPost} />
                {/* <input style={{backgroundColor: 'red', color: 'white'}} type="submit" value="Delete" onClick={deletePost} /> */}
            </form>
        </div>
    )
}

export default CreatePost;