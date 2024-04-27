import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comment = (props) => {
    // const { id } = useParams();
    // // const [comment, setComment] = useState([]);

    // // useEffect(() => {
    // //     const fetchComments = async () => {
    // //         const data = await supabase
    // //         .from('RedditComment')
    // //         .select()
    // //         .eq('id', id)
    // //         .sort('created_at', {ascending: false})
    // //         console.log('comment:', data)
    // //     setComment(data.data[0])
    // //     }
    // //     fetchComments();
    // // }, [id]);
    
    return (
        <div>
            <hr style={{height: '0.5px'}} />
            <p style={{color: 'gray'}}>Created at {props.created_at}</p>
            <p>{props.comment_content}</p>
            {props.author && <p>{props.author}</p>}
            {/* <p>Vote: {props.vote}</p> */}
            {/* {isHome && <Link to={"postDetail/" + props.id} >View details</Link>}
            <Link to={"edit/" + props.id} >Edit this card</Link> */}
        </div>
    )
}

export default Comment;