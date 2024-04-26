import React, { useState, useEffect } from 'react';
import { supabase } from "../client";

const SearchBar = ( props ) => {
    const [posts, setPosts] = useState([]);
    useEffect (() => {
        const fetchPosts = async () => {
            const { data } = await supabase
            .from('Reddit')
            .select()
            .order('vote', {ascending: false});
            setPosts(data);
        }
        fetchPosts();
    }, []);
    
    const searchTitles = (searchValue) => {
        props.setSearchInput(searchValue);
        if (searchValue != "") {
            // console.log('inputs:', posts)
            const filteredData = posts.filter(input => 
            input.title.toLowerCase().includes(searchValue.toLowerCase()));
            props.setSearchResults(filteredData);
            // console.log('filter:', filteredData);

        }
    }
return (
    <div>
        <input
            type="text"
            placeholder="Search by title..."
            onChange={(inputString) => searchTitles(inputString.target.value)}
        />
    </div>
    )
}
export default SearchBar