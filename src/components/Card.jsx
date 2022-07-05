import React from 'react'

const Card = (props) => {
    return (
        <div className="card mt-6 bg-white shadow-lg">
            <div className="shadow-sm">
                <img className="card-img" src={props.image} alt=""/>
            </div>
            <div className="p-5 space-y-3">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl text-indigo-700 font-bold pr-1">{props.price}</span>
                        <span className="text-gray-400 font-medium">/month</span>
                    </div>
                    <div className="flex items-center bg-indigo-600 rounded-2xl px-2">
                        <span className="text-white font-medium">{props.type}</span>
                    </div>
                </div>
                <div>
                    <span className="text-3xl text-indigo-900 font-bold">{props.name}</span>
                </div>
                <div>
                    <span className="text-gray-400 font-medium">{props.address}, {props.location}</span>
                </div> <hr></hr>
                <div className="flex justify-between text-gray-400 font-medium">
                    <span>{props.beds} Beds</span>
                    <span>{props.baths} Bathrooms</span>
                    <span>{props.area} sqft</span>
                </div>
            </div>
        </div>
    )
}

export default Card