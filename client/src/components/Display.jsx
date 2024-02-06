import React from 'react';

const Display = ({ pokemonCard }) => {
    
    var log = console.log.bind(console);
    log("=== DISPLAY PROPS", pokemonCard); // === DISPLAY PROPS [{ pokeSearch: ... }]
    
    // ? Ensure that data is the right type
    log(Array.isArray(pokemonCard)); // true
    
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='my-4 font-bold text-2xl'>My Pokémon Cards</h2>
            
            <div id="cards">
                
                <div className="flex justify-center gap-4">
                {pokemonCard.map((card, index) => (
                    <div key={index} id="card" className="px-2 py-6 bg-zinc-200/25">
                        <h4>{ card.pokeSearch }</h4>
                    </div>
                ))}
                </div>
                
            </div>
            
        </div>
    );
}

export default Display;
