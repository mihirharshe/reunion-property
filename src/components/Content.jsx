import React from 'react'
import Card from './Card';
import Filter from './Filter';
import data from '../data';


function Content() {

    const [properties, setProperties] = React.useState(data);

    return (
        <div className="sm:mx-10 sm:my-5 mx-5 my-2 pb-7">
            <span className="text-4xl font-bold">Search properties to rent</span>

            <div className="my-10">
                <Filter />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-x-20 flex-wrap justify-center">
                {properties.map((property, id) => (
                    <Card
                        key={id}
                        name={property.name}
                        image={property.image}
                        price={property.price}
                        location={property.location}
                        address={property.address}
                        type={property.type}
                        beds={property.beds}
                        baths={property.baths}
                        area={property.sqft}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content