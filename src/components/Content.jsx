import React from 'react'
import Card from './Card';
import data from '../data';

function Content() {

    const[properties, setProperties] = React.useState(data);

    return (
        <div className="sm:mx-10 sm:my-5 mx-5 my-2 pb-7">
            <span className="text-4xl font-bold">Search properties to rent</span>

            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 flex-wrap justify-center">
                {properties.map(key => (
                    <Card 
                        key={key} 
                        name={key.name}
                        image={key.image} 
                        price={key.price} 
                        location={key.location}
                        address={key.address} 
                        type={key.type}
                        beds={key.beds} 
                        baths={key.baths} 
                        area={key.sqft}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content