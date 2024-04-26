import { supabase } from "../client";
import Card from "../components/Card";
import React, { useState, useEffect } from 'react';

const ViewPosts = (props) => {
    
    const [posts, setPosts] = useState([]);
    
    useEffect (() => {
        setPosts(props.data);
        const fetchPosts = async () => {
            const { data } = await supabase
            .from('Reddit')
            .select()
            .order('vote', {ascending: false});
            setPosts(data);
        }
        fetchPosts();
    }, [props]);

    return (
        <div className="ViewPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post, index) => 
                    <Card id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} />) 
                    : <h2>{'No Posts Added Yet 😞'}</h2>
            }
        </div>
    )
}

export default ViewPosts;