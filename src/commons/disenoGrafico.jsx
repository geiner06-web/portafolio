import React from "react";
import { motion } from "framer-motion";

const DisenoGrafico = () => {
  return (
    <section className="bg-purple-950 text-white p-5 mt-10 w-full">
      <h2 className="text-5xl font-bold mt-10 mb-10 subtituloMobil">
        Ademas Poseo otras habilidades
      </h2>
      <p className="leading-8 text-center p-2 py-6">
        Poseo sólidos conocimientos en diseño gráfico y estoy incursionando en el modelado 3D, utilizando
        herramientas como <strong>Photoshop</strong>,{" "}
        <strong>Illustrator</strong> y <strong>Blender</strong> para crear
        diseños impactantes y visualmente coherentes que complementan mis
        producciones audiovisuales.
      </p>

      <div className="flex justify-center gap-8 text-center mt-10 align-middle recuadros">
        {/* Illustrator */}
        <div className="lg:w-1/3 md:w-60">
          <h3 className="font-bold mb-10 text-md">Illustrator</h3>
          <motion.img
            className="w-30 h-30 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
            alt="Illustrator"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-white text-xl">Manejo</h3>
              </div>
              <div className="stat-value">80%</div>
            </div>
          </div>
        </div>

        {/* Photoshop */}
        <div className="lg:w-1/3 md:w-60">
          <h3 className="font-bold mb-10 text-md">Photoshop</h3>
          <motion.img
            className="w-30 h-auto mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png"
            alt="Photoshop"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-white text-xl">Manejo</h3>
              </div>
              <div className="stat-value">90%</div>
            </div>
          </div>
        </div>

        {/* Blender */}
        <div className="lg:w-1/3 md:w-60">
          <h3 className="font-bold mb-10 text-md">Blender</h3>
          <motion.img
            className="w-30 h-30 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
            alt="Blender"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-white text-xl">Manejo</h3>
              </div>
              <div className="stat-value">40%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisenoGrafico;
