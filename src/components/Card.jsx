import react, { useEffect, useState } from 'react';
import { supabase } from '../client';
import { Link, useLocation } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isDetail = location.pathname.includes('postDetail');

    return (
        <div className="Card">
            <p style={{color: 'gray'}}>Created at {props.created_at}</p>
            {props.image && <img style={{width: '30%'}} src={props.image} alt="Banner"/> }
            <h2>{props.title}</h2>
            {isDetail && <p>{props.content}</p>}
            <p>Vote: {props.vote}</p>
            {isHome && <Link to={"postDetail/" + props.id} >View details</Link>}
            <Link to={"edit/" + props.id} >Edit this card</Link>
            {isDetail? <svg 
                onClick={props.handleVote}
                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
                <path fill="currentColor" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"></path>
            </svg> : <p>{props.vote} upvotes</p>}
        </div>
    )

}

export default Card;