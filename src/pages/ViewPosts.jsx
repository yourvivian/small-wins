import { supabase } from "../client";
import Card from "../components/Card";
import React, { useState, useEffect } from 'react';
import Sort from "../components/Sort";

const ViewPosts = (props) => {
    
    const [posts, setPosts] = useState([]);
    const [sort, setSort] = useState('vote');
    // const [searchValue, setSearchValue] = useState('');


    useEffect (() => {
        setPosts(props.data);
        const fetchPosts = async () => {
            const { data } = await supabase
            .from('Reddit')
            .select()
            .order(sort, {ascending: false});
            setPosts(data);
        }
        fetchPosts();
    }, [props, sort]);

    return (
        <div className="ViewPosts">
            <Sort setSort={setSort} />
            {
                props.searchInput !== "" ?  (
                    props.searchResults && props.searchResults.length > 0 ?
                    props.searchResults.map((post, index) => 
                    <Card key={post.id} id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} />) 
                    : <h2>{'This title does not exist 😞'}</h2>
                ) : (
                    posts && posts.length > 0 ?
                    posts.map((post, index) => 
                    <Card key={post.id} id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} />) 
                    : <h2>{'No Posts Added Yet 😞'}</h2>
                )
            }
        </div>
    )
}

export default ViewPosts;