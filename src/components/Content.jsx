import React, { useState } from 'react'
import Card from './Card';
import Filter from './Filter';
import data from '../data';


function Content() {
    const [filteredData, setFilteredData] = useState([...data]);
    return (
        <div className="container mx-auto py-8 px-3 sm:px-0 md:px-0 lg:px-0">
            <span className="text-4xl font-bold">Search properties to rent</span>

            <div className="my-10">
                <Filter setData={setFilteredData}/>
            </div>
            {filteredData.length > 0 ?
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 flex-wrap justify-center">

                {filteredData.map((property, id) => (
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
            :
            <div className="text-center text-5xl font-medium">No matches</div>
            }
        </div>
    )
}

export default Content