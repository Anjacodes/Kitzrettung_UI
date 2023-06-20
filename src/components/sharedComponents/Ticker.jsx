import React from 'react';
import zahlen from './zahlen';

const ticker = () => {
    return (
        <div className="w-screen overflow-hidden bg-third py-4">
            <div className="flex animate-ticker">
                <h2 className="w-full text-center text-white uppercase text-sm lg:text-2xl shrink-0 box-border">Diese Saison bereits gerettet:</h2>
                <h2 className="text-white uppercase text-sm lg:text-2xl shrink-0 box-border">{zahlen.saison_kitze} Rehkitze,&nbsp;</h2>
                <h2 className="text-white uppercase text-sm lg:text-2xl shrink-0 box-border">{zahlen.saison_rotwild} Rotwildkalb,&nbsp;</h2>
                <h2 className="text-white uppercase text-sm lg:text-2xl shrink-0 box-border">{zahlen.saison_hasen} Hasen, {zahlen.saison_fasanengelege} Fasanengelege</h2>
            </div>
        </div>
    )
}

export default ticker;