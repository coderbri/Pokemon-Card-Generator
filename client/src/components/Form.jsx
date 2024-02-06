import React, { useState } from 'react';

const Form = ({ pokemonCard, setPokemonCard }) => {
    var log = console.log.bind(console);
    log( "=== FORM PROPS:", pokemonCard, setPokemonCard );
    
    const [ pokemonName, setPokemonName ] = useState("");
    
    const changeHandler = e => {
        // log(e);
        setPokemonName({ ...pokemonName, [e.target.name]: e.target.value });
    }
    const submitHandler = e => {
        e.preventDefault();
        setPokemonCard([ ...pokemonCard, pokemonName ]);
    }
    
    return (
        <form onSubmit={submitHandler} className='max-w-md mx-auto' id='poke-form'>
            
            <h2 className='my-4 font-bold text-2xl'>I choose You!</h2>
            
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="pokeSearch"
                    onChange={changeHandler}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                    placeholder=" " required 
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Search Pokémon
                </label>
            </div>
            
            <button type="submit" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3.5 py-2 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Generate Pokémon Card</button>
            
        </form>
    );
}

export default Form;
