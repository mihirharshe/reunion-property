import React from 'react'

function Header() {
    return (
        <div className="max-w-full mx-auto py-4 px-8 bg-slate-50 h-20 shadow-sm">
            <div className="flex items-center">
                <div className="flex space-x-5">
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-bold text-lg text-indigo-900">Estatery</span>
                    </div>

                    <div className="flex space-x-3 ">
                        <button className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">Rent</button>
                        <button className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">Buy</button>
                        <button className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">Sell</button>
                        <button className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">Manage Property</button>
                        <button className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">Resources</button>
                    </div>
                </div>

                <div className="flex ml-auto items-center space-x-3">
                    <button className="px-5 py-2 rounded-lg font-medium bg-white text-indigo-600 border border-solid border-gray-200">Login</button>
                    <button className="px-5 py-2 rounded-lg font-medium bg-indigo-600 text-white border border-solid border-gray-200">Sign up</button>
                </div>
            </div>

        </div>
    )
}

export default Header