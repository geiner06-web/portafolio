import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-purple-950 p-5 mb-15 flex items-center justify-center">
      <div className="hero-content flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* Sección de texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-3 md:mb-5 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Geiner Mora Castro
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Perfil Profesional
          </motion.h2>

          <motion.p
            className="leading-6 md:leading-8 text-justify text-white mb-4 md:mb-6 px-2 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Editor de video y productor audiovisual con más de 10 años de
            experiencia en la creación de contenido para transmisiones en vivo
            y videos corporativos. Especializado en el uso de herramientas como
            Premiere Pro, After Effects, Blender, Photoshop e Illustrator.
            Además, poseo habilidades en desarrollo web (HTML, CSS, Java) y
            experiencia en soporte técnico, complementadas con conocimientos en
            inteligencia artificial.
          </motion.p>

          <motion.button
            className="btn bg-white text-purple-950 font-bold py-3 px-6 rounded-md shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="https://wa.me/50683541791"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctame por WhatsApp
            </a>
          </motion.button>
        </div>

        {/* Imagen de la cámara, oculta en móviles */}
        <motion.img
          src="/camara.png"         // Ajusta si tu archivo está en otra carpeta
          alt="Cámara"
          className="hidden md:block md:w-1/2 max-w-sm mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
