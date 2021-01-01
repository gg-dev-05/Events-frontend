import React from 'react'
import './Card.css'

export default function Card(props) {
    // Club, Date-of-event, description, details, id, image, title
    return (
        <div className="Card">
            {props.details['club']}
            {props.details['date']}
            {props.details['description']}
            {props.details['details']}
            {props.details['id']}
            {props.details['image']}
            {props.details['title']}
        </div>
    )
}
