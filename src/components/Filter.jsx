import React, { useEffect, useState } from 'react';
import data from '../data';

const Filter = ({ setData }) => {

    const propertyTypes = [
        'Apartment', 'Bungalow', 'Condo', 'Loft', 'Mansion'
    ]
    const locations = [
        'Atlanta','Chicago', 'London', 'Los Angeles', 'New York', 'Seattle'
    ]

    const [priceRange, setPriceRange] = useState([0, 99999]);
    const [areaRange, setAreaRange] = useState([0, 99999]);
    const [locationValue, setLocationValue] = useState('All');
    const [propertyTypeValue, setPropertyTypeValue] = useState('All');

    useEffect(() => {
        setData(data.filter(property => {
            return (
                property.price >= priceRange[0] &&
                property.price <= priceRange[1] &&
                property.sqft >= areaRange[0] &&
                property.sqft <= areaRange[1] &&
                (property.location === locationValue || locationValue === 'All') &&
                (property.type === propertyTypeValue || propertyTypeValue === 'All')
            )
        }));
    }, [priceRange, areaRange, locationValue, propertyTypeValue]);

    const handlePriceChange = (e) => {
        let val = parseInt(e.target.value);
        let items = [...priceRange];
        if (e.target.id === 'priceLower') {
            items[0] = val;
            setPriceRange(items);
        } else if (e.target.id === 'priceHigher') {
            items[1] = val;
            setPriceRange(items);
        }
    }

    const handleAreaChange = (e) => {
        let val = parseInt(e.target.value);
        let items = [...areaRange];
        if (e.target.id === 'areaLower') {
            items[0] = val;
            setAreaRange(items);
        } else if (e.target.id === 'areaHigher') {
            items[1] = val;
            setAreaRange(items);
        }
    }

    const handleLocationChange = (e) => setLocationValue(e.target.value);
    const handlePropertyTypeChange = (e) => setPropertyTypeValue(e.target.value);


    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-lg shadow-md bg-white font-medium">
            <div className="p-5 flex flex-col mx-auto">
                <span className="text-gray-500 ml-1">Location:</span>
                <div>
                    <select value={locationValue} onChange={handleLocationChange}>
                        <option>All</option>
                        {locations.map((property, id) => (
                            <option key={id}>{property}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="p-5 flex flex-col mr-auto lg:mx-auto">
                <span className="text-gray-500">Price:</span>
                <div>
                    From: $<input id="priceLower" className="w-12 ml-1 " type="number" value={priceRange[0]} onChange={handlePriceChange}></input>
                    To: $<input id="priceHigher" className="w-12 ml-1" type="number" value={priceRange[1]} onChange={handlePriceChange}></input>
                </div>
            </div>
            <div className="p-5 flex flex-col mx-auto">
                <span className="text-gray-500 ml-1">Type:</span>
                <div>
                    <select value={propertyTypeValue} onChange={handlePropertyTypeChange}>
                        <option>All</option>
                        {propertyTypes.map((property, id) => (
                            <option key={id}>{property}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="p-5 flex flex-col mr-auto lg:mx-auto">
            <span className="text-gray-500">Area:</span>
                <div>
                    From: <input id="areaLower" className="w-12 ml-1" type="number" value={areaRange[0]} onChange={handleAreaChange} ></input>sqft
                    To: <input id="areaHigher" className="w-12 ml-1" type="number" value={areaRange[1]} onChange={handleAreaChange} ></input>sqft
                </div>
            </div>

        </div>
    )
}

export default Filter