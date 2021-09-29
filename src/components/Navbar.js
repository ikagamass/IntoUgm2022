import React from 'react'

function Navbar() {
    return (
        <div className="flex-cc col h-screen p-6">
            <div className="flex-cc w-1/2 h-1/3 my-12 rounded-xl border-4 border-red-600">
                <h1 className="font-bold text-lg">Try Out</h1>
            </div>
            <div className="flex-cc w-1/2 h-1/3 my-12 rounded-xl border-4 border-red-600">
                <h1 className="font-bold text-lg">Live</h1>
            </div>
            <div className="flex-cc w-1/2 h-1/3 my-12 rounded-xl border-4 border-red-600">
                <h1 className="font-bold text-lg">Tour de Faculty</h1>
            </div>
        </div>
    )
}

export default Navbar
