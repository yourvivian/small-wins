import { supabase } from "../client";
import Card from "../components/Card";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const DetailView = ({ data }) => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [vote, setVote] = useState(post.vote);
    
    useEffect (() => {
        const fetchPosts = async () => {
            const data = await supabase
            .from('Reddit')
            .select()
            .eq('id', id)
            console.log('data:', data)
        setPost(data.data[0])
        }
        fetchPosts();
    }, [id, vote]);

    const updateVote = async () => {
        await supabase
            .from('Reddit')
            .update({vote: post.vote + 1})
            .eq('id', post.id)
        setVote(post.vote + 1)
    }

    return (
        <div className="DetailView">
            {/* <h2>{post.title}</h2>
            <h3>{post.content}</h3>
            <p>{post.created_at}</p>
            <p>Vote: {post.vote}</p>
            {post.img && <img src={post.img} alt="Banner"/> }
            <Link to={`/edit/${post.id}`}>Edit this card</Link>         */}
            <Card handleVote={updateVote} image={post.image} id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} content={post.content} />
        </div>
    )
}

export default DetailView;