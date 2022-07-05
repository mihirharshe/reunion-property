import React from 'react'

const Card = (props) => {
    return (
        <div className="w-96 mt-6 p-5 py-20">
            <div className="h-30 bg-contain border border-solid border-black">
                <img className="bg-contain" src={props.image} alt=""/>
            </div>
            <div>
                <span>{props.price}</span>
                <span>{props.address}</span>
            </div>
            <div>
                <span>{props.beds}</span>
                <span>{props.baths}</span>
                <span>{props.area}</span>
            </div>
        </div>
    )
}

export default Card