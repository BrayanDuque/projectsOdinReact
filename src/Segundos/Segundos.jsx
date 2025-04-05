import React from 'react'
import { useState, useEffect } from "react";

export const Segundos = () => {
  //Se crea un estado con las variable de contador y su callback modificador
     const [counter, setCounter] = useState(0);
//utilizamos useEffect para ejecutar el efecto de cada segundo
//en este caso cada segundo se incrementa el contador en 1
      useEffect(() => {
//ejecutamos el efecto cada segundo
//setInterval devuelve un id que se puede usar para limpiar el intervalo
        const key = setInterval(() => {
          setCounter((count) => count + 1);
        }, 1000);
//limpiamos el intervalo al desmontar el componente
//para evitar que se sigan ejecutando los efectos
        return () => {
          clearInterval(key);
        };
      }, []);
  return (
    <>
      <p>{counter} seconds have passed.</p>
    </>
  );
}
export default Segundos;