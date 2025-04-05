import React from "react";
import { useState } from "react";
export const InfoCv = () => {
  const [btnSend, setBtnSend] = useState(true);
  const handleClick = () => {
    if (btnSend) {
      setBtnSend(!btnSend);
    }
  };
  return (
    <>
      <h1 className="text-2xl text-center font-semibold mt-5">
        Curriculum para OdinProject
      </h1>
      <div className="container mx-auto flex flex-col gap-4 mt-4 text-center border-2 border-gray-300 rounded-lg p-4 bg-gray-100 justify-center ">
        <section id="InfoPersonal">
          <h2 className="text-xl font-medium">Información Personal</h2>
          <form action="" method="post" className="grid grid-cols-2 gap-4">
            <label
              for="name"
              className="flex flex-col justify-center items-center"
            >
              Nombre completo
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2 :border-blue-400 text-center"
                placeholder="Pepito perez pinto"
              />
            </label>
            <label
              for="movil"
              className="flex flex-col justify-center items-center"
            >
              Movil de contacto
              <input
                type="number"
                id="movil"
                name="movil"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2 :border-blue-400 text-center"
                placeholder="56912345678"
              />
            </label>
            <label
              for="correo"
              className="col-span-2 flex  justify-center items-center"
            >
              Correo electrónico:
              <input
                type="email"
                id="correo"
                name="correo"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
                placeholder="pepito@gmail.com"
              />
            </label>
          </form>
        </section>
        <section id="infoEstudios">
          <h2 className="text-xl font-medium my-2">Información educativa</h2>
          <form action="" method="post" className="grid grid-cols-2 gap-4">
            <label
              for="institucion"
              className="col-span-2 flex justify-center items-center"
            >
              Nombre de la institución:
              <input
                type="text"
                id="institucion"
                name="institucion"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
                placeholder="Universidad de Colombia"
              />
            </label>
            <label
              for="titulo"
              className="flex flex-col justify-center items-center"
            >
              Titulo obtenido
              <input
                type="text"
                id="titulo"
                name="titulo"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
                placeholder="Ingeniero en sistemas"
              />
            </label>
            <label
              for="anio"
              className="flex flex-col justify-center items-center"
            >
              Año de egreso
              <input
                type="date"
                id="anio"
                name="anio"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
                placeholder="01-02-2025"
              />
            </label>
          </form>
        </section>
        <section id="infoLaboral">
          <h2 className="text-xl font-medium my-2">Experiencia Laboral</h2>
          <form
            action=""
            method="post"
            className="grid grid-cols-2 gap-4 justify-center items-center"
          >
            <label
              for="empresa"
              className="flex flex-col justify-center items-center"
            >
              Nombre de la empresa
              <input
                type="text"
                id="empresa"
                name="empresa"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
                placeholder="Google"
              />
            </label>
            <label
              for="cargo"
              className="flex flex-col justify-center items-center"
            >
              Cargo
              <input
                type="text"
                id="cargo"
                name="cargo"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
                placeholder="Desarrollador Front-end"
              />
            </label>
            <label
              for="anioInicio"
              className="flex flex-col justify-center items-center"
            >
              Fecha de inicio
              <input
                type="date"
                id="anioInicio"
                name="anioInicio"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
              />
            </label>
            <label
              for="anioFin"
              className="flex flex-col justify-center items-center"
            >
              Fecha de finalización
              <input
                type="date"
                id="anioFin"
                name="anioFin"
                required
                className="border-1 border-blue-200 rounded-lg w-1/2 mx-2  text-center"
              />
              
            </label>
            <label
              for="descripcion"
              className="col-span-2 flex flex-col justify-center items-center my-2 "
            >
                Describa las funciones que realizaba en su cargo
              <textarea
              id="descripcion"
                name="descripcion"
                required
                className="border-1 border-blue-200 rounded-lg w-full mx-2  text-center"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis molestie justo in est faucibus, non maximus purus malesuada. Aliquam erat volutpat. Nulla facilisi. Duis molestie justo in est faucibus, non maximus purus malesuada."
              />
            </label>
          </form>
        </section>
        <button
          type="button"
          className={` text-white font-bold py-2 px-4 rounded-lg mt-4 w-1/2 self-center pointer-events-auto  ${
            btnSend ? "bg-blue-500" : "bg-green-500"
          }`}
          onClick={handleClick}
        >
          {btnSend ? "Enviar" : "Enviado!"}
        </button>
      </div>
    </>
  );
};

export default InfoCv;
