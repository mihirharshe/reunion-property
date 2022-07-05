import React from 'react'

const Filter = () => {
    return (
        <div className="grid grid-cols-4 text-center bg-white divide-x">
            <div className="p-5">
                Location
            </div>
            <div className="p-5">
                Price
            </div>
            <div className="p-5">
                Type
            </div>
            <div className="p-5">
                Area
            </div>
        </div>
    )
}

export default Filter