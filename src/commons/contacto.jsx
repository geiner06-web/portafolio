import React from "react";

const Contacto = () => {
  return (
    <section className="p-5 mt-10">
      <h2 className="text-5xl font-bold mb-4 text-center">Contacto</h2>
      <div className="text-center mb-8">
        <p>Geiner Mora Castro</p>
        <p>Ubicación: Pérez Zeledón, Costa Rica</p>
        <p>Teléfono: +506 8354 1791</p>
        <p>Correo Electrónico: geinermorscastro@gmail.com</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a 
          href="https://wa.me/50683541791" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded text-center"
        >
          Contáctame por WhatsApp
        </a>
        <a 
          href="mailto:geinermorscastro@gmail.com" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded text-center"
        >
          Envíame un Correo
        </a>
      </div>
    </section>
  );
};

export default Contacto;
