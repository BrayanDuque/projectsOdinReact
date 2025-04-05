import React from "react";
import { useState, useEffect } from "react";
export const Tarjetas = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemones(data.results))
      .catch((err) => console.log(err));
  }, []);

   //funcion para que todas las tarjetas cambien de posicion entre ellas 
    const handleClick = () => {
    const shuffledPokemones = [...pokemones].sort(() => Math.random() - 0.5);
    setPokemones(shuffledPokemones)}
   
  return (
    <>
      <h1 className="text-center text-2xl font-semibold my-5">Pokemones al azar</h1>
      
       <section>
        <div className="container grid grid-cols-4 gap-2 m-5">
          {pokemones.map((pokemon, index) => (
            <div className="flex flex-col justify-center items-center shadow-xl rounded-lg" key={index} onClick={handleClick}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              
            </div>
          ))}
        </div>  
       </section>
    </>
  );
};
export default Tarjetas;
