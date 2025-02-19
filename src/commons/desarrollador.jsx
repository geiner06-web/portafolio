import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Desarrollo = () => {
  // Referencias para los elementos
  const h2Ref = useRef(null);
  const reactImgRef = useRef(null);
  const tailwindImgRef = useRef(null);
  const htmlCssImgRef = useRef(null);
  const jsImgRef = useRef(null);

  // Detectar cuándo los elementos están en el viewport
  const h2InView = useInView(h2Ref, { once: true });
  const reactImgInView = useInView(reactImgRef, { once: true });
  const tailwindImgInView = useInView(tailwindImgRef, { once: true });
  const htmlCssImgInView = useInView(htmlCssImgRef, { once: true });
  const jsImgInView = useInView(jsImgRef, { once: true });

  return (
    <section className="p-5 mt-10 w-full">
      {/* Animación para el h2 */}
      <motion.h2
        ref={h2Ref}
        initial={{ x: -100, opacity: 0 }}
        animate={h2InView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="text-5xl font-bold mt-10 mb-10 subtituloMobil text-center"
      >
        Mi etapa como desarrollador
      </motion.h2>

      <p className="leading-8 text-center p-2 py-6">
        Estoy comenzando mi camino en el desarrollo, incursionando en
        tecnologías como <strong>React</strong>, <strong>Tailwind</strong>,{" "}
        <strong>HTML</strong>, <strong>CSS</strong> y algo de{" "}
        <strong>Java</strong>. Me apasiona este mundo, y aunque hoy aún estoy en
        aprendizaje y no soy el mejor, practico 1 o 2 horas diarias con el
        objetivo de convertirme en un desarrollador fullstack. Un ejemplo de mi
        trabajo es esta página web, que es una práctica y la iré puliendo a
        medida que avanzo. Como ingeniero en sistemas, disfruto cada paso de
        este proceso.
      </p>

      <div className="flex flex-wrap justify-center gap-8 text-center mt-10 lg:justify-between lg:gap-0 recuadrospequenos">
        {/* Animación para la imagen de React */}
        <motion.div
          ref={reactImgRef}
          initial={{ y: 50, opacity: 0 }}
          animate={reactImgInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/5 md:w-60"
        >
          <h3 className="font-bold mb-10 text-md">React</h3>
          <img
            className="w-30 h-30 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-xl">Manejo</h3>
              </div>
              <div className="stat-value">50%</div>
            </div>
          </div>
        </motion.div>

        {/* Animación para la imagen de Tailwind */}
        <motion.div
          ref={tailwindImgRef}
          initial={{ y: 50, opacity: 0 }}
          animate={tailwindImgInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/5 md:w-60"
        >
          <h3 className="font-bold mb-10 text-md">Tailwind</h3>
          <img
            className="w-30 h-30 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind"
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-xl">Manejo</h3>
              </div>
              <div className="stat-value">40%</div>
            </div>
          </div>
        </motion.div>

        {/* Animación para la imagen de HTML & CSS */}
        <motion.div
          ref={htmlCssImgRef}
          initial={{ y: 50, opacity: 0 }}
          animate={htmlCssImgInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/5 md:w-60"
        >
          <h3 className="font-bold mb-10 text-md">HTML & CSS</h3>
          <img
            className="w-30 h-30 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML & CSS"
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-xl">Manejo</h3>
              </div>
              <div className="stat-value">60%</div>
            </div>
          </div>
        </motion.div>

        {/* Animación para la imagen de JavaScript */}
        <motion.div
          ref={jsImgRef}
          initial={{ y: 50, opacity: 0 }}
          animate={jsImgInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-1/5 md:w-60"
        >
          <h3 className="font-bold mb-10 text-md">JavaScript</h3>
          <img
            className="w-30 h-30 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript"
          />
          <div className="stats">
            <div className="stat place-items-center">
              <div>
                <h3 className="stat-title text-xl">Manejo</h3>
              </div>
              <div className="stat-value">30%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Desarrollo;