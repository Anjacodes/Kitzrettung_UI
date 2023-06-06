import React from 'react';

const ticker = () => {
    return (
        <div className="w-screen overflow-hidden bg-third py-4">
            <div className="flex animate-ticker">
                <h2 className="w-full text-center text-white uppercase text-sm lg:text-2xl shrink-0 box-border">Diese Saison bereits gerettet:</h2>
                <h2 className="text-white uppercase text-sm lg:text-2xl shrink-0 box-border">62 Rehkitze, </h2>
                <h2 className="text-white uppercase text-sm lg:text-2xl shrink-0 box-border"> 1 Rotwildkalb, </h2>
                <h2 className="text-white uppercase text-sm lg:text-2xl shrink-0 box-border"> 2 Hasen, 1 Fasanengelege</h2>
            </div>
        </div>
    )
}

export default ticker;