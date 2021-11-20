import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="flex-cc col h-screen p-6">
            <Link to='try-out' className="flex-cc w-1/2 h-1/3 my-12 rounded-xl border-4 border-red-600">
                <h1 className="font-bold text-lg">Try Out</h1>
            </Link>
            <Link to='live' className="flex-cc w-1/2 h-1/3 my-12 rounded-xl border-4 border-red-600">
                <h1 className="font-bold text-lg">Live</h1>
            </Link>
            <Link to='tour-de-faculty' className="flex-cc w-1/2 h-1/3 my-12 rounded-xl border-4 border-red-600">
                <h1 className="font-bold text-lg">Tour de Faculty</h1>
            </Link>
        </div>
    )
}

export default Navbar
