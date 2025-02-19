import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero bg-base-200 p-5 mb-15">
      <div className="hero-content flex-col lg:flex-row">
        {/* Imagen con fade */}
        <motion.img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div>
          {/* Título con fade y desplazamiento vertical */}
          <motion.h1
            className="text-center text-6xl font-bold mb-5 tituloMobil"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Geiner Mora Castro
          </motion.h1>

          {/* Subtítulo con un pequeño deslizamiento horizontal */}
          <motion.h2
            className="text-2xl font-bold subtituloMobil"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Perfil Profesional
          </motion.h2>

          {/* Párrafo con fade */}
          <motion.p
            className="py-6 leading-8 text-justify p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Editor de video y productor audiovisual con más de 10 años de experiencia en la creación de contenido para transmisiones en vivo y videos corporativos. Especializado en el uso de herramientas como Premiere Pro, After Effects, Blender, Photoshop e Illustrator. Además, poseo habilidades en desarrollo web (HTML, CSS, Java) y experiencia en soporte técnico, complementadas con conocimientos en inteligencia artificial.
          </motion.p>

          {/* Botón con animación de atención al hacer hover */}
          <motion.button
            className="btn btn-primary p-2 w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <a 
              href="https://wa.me/50683541791" 
              target="_blank"
              rel="noopener noreferrer"
              className=" text-black font-bold py-4 px-8 text-center"
            >
              Contáctame por WhatsApp
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
