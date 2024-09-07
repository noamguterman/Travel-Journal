import React from "react"
import locationDot from "../assets/location-dot.svg"

export default function Entry(props) {
    return (
        <div className="entry">
            <div>
                <img src={props.imageUrl} className="entry--image" />
            </div>
            <div className="entry--text">
                <div>
                    <img src={locationDot} className="entry--icon" />
                    <span className="entry--location">{props.location}</span>
                    <span><a href={props.googleMapsUrl} target="_blank" className="entry--maps">View on Google Maps</a></span>
                </div>
                <h1 className="entry--title">{props.title}</h1>
                <p className="entry--date">{props.startDate} - {props.endDate}</p>
                <p className="entry--description">{props.description}</p>
            </div>
        </div>
    )
}