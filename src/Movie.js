import React from 'react'
import './Movie.css';

export default function Movie(props) {
    const {title, rating, id } = props.item

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(
            <img
            key={i}
            src="/images/star.png"
            alt="Star image"
            style={{height: "20px", marginLeft: "2px"}}
            />
        )
    } 


    return (
        <li className="list-group-item movie-item">
            {title} 
            <button className="btn btn-sm btn btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
            <span className="movie-stars">{stars}</span>
        </li>
    )
}