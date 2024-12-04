import React from "react";

interface data {
    pokemon: any
}

const DataPokemon: React.FC<data> = ({pokemon})=> {

    return (
        <div>
        
        <h1>{pokemon.name}</h1>
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
        <p>{pokemon.type}</p>
        
        </div>
    )

}

export default DataPokemon;