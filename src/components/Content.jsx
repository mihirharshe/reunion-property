import React from 'react'
import Card from './Card';
import data from '../data';

function Content() {

    const[properties, setProperties] = React.useState(data);

    return (
        <div className="sm:mx-10 sm:my-5 mx-5 my-2 ">
            <span className="text-4xl font-bold">Search properties to rent</span>

            <div className="grid grid-cols-4 flex-wrap justify-center">
                {properties.map(key => (
                    <Card 
                        key={key} 
                        image={key.image} 
                        price={key.price} 
                        address={key.address} 
                        beds={key.beds} 
                        baths={key.baths} 
                        area={key.area}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content