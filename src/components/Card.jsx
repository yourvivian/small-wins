import react from 'react';
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
        </div>
    )

}

export default Card;