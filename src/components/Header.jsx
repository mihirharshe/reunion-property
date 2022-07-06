import React, { useState } from 'react'
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="max-w-full mx-auto py-4 md:px-8 lg:px-8 bg-slate-50 h-20 shadow-sm">
            <div className="">
                <div className="flex">
                    <div className="flex items-center space-x-1 ml-2 md:mr-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-bold text-lg text-indigo-900">Estatery</span>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <i className={open ? 'bx bx-x ' : 'bx bx-menu'}></i>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-8 md:shadow-none shadow-md md:pl-9 pl-0  bg-slate-50 md:w-auto w-full md:static absolute ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                        <li className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">
                            <a href='/'>Rent</a>
                        </li>
                        <li className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">
                            <a href='/'>Buy</a>
                        </li>
                        <li className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">
                            <a href='/'>Sell</a>
                        </li>
                        <li className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">
                            <a href='/'>Manage Property</a>
                        </li>
                        <li className="text-[15px] rounded-sm font-medium text-gray-600 hover:text-gray-900 py-2 px-4 focus:bg-indigo-100 focus:text-indigo-500">
                            <a href='/'>Resources</a>
                        </li>
                        <div className="flex ml-2 items-center space-x-3 md:ml-auto pt-3 md:pt-0">
                            <button className="px-5 py-2 rounded-lg font-medium bg-white text-indigo-600 border border-solid border-gray-200">Login</button>
                            <button className="px-5 py-2 rounded-lg font-medium bg-indigo-600 text-white border border-solid border-gray-200">Sign up</button>
                        </div>
                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Header