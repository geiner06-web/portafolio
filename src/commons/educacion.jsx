import React from "react";
import { motion } from "framer-motion";

// Variantes para contenedores con efecto de escalonamiento (stagger)
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

// Variantes para cada ítem
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const EducationAndSkills = () => {
  return (
    <motion.section
      className="p-5 bg-emerald-700 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col md:flex-row gap-8">
        {/* Educación */}
        <motion.div className="w-full md:w-1/2" variants={containerVariants}>
          <motion.h2 className="text-5xl font-bold mb-5" variants={itemVariants}>
            Educación
          </motion.h2>
          <motion.ul className="list-disc ml-5 space-y-4 text-left">
            <motion.li variants={itemVariants}>
              <strong>Ingeniería en Sistemas Informáticos</strong> <br />
              Universidad Internacional San Isidro Labrador (UISIL) <br />
              Graduación: 2023
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Técnico en Mandos Medios en Electrónica y Telecomunicaciones</strong> <br />
              Institución: INA
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Posgrado en Análisis de Datos</strong> <br />
              Universidad Autónoma de Chile
            </motion.li>
            <motion.li variants={itemVariants}>
              <strong>Cursos y Certificaciones (En progreso)</strong> <br />
              • Ciberseguridad <br />
              • Desarrollo Full Stack
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Habilidades */}
        <motion.div className="w-full md:w-1/2" variants={containerVariants}>
          <motion.h2 className="text-5xl font-bold mb-5" variants={itemVariants}>
            Habilidades
          </motion.h2>

          {/* Habilidades Técnicas */}
          <motion.div className="mb-6" variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold mb-2" variants={itemVariants}>
              Habilidades Técnicas
            </motion.h3>
            <motion.ul className="list-disc ml-5 space-y-2 text-left">
              <motion.li variants={itemVariants}>
                <strong>Edición de video:</strong> Premiere Pro, After Effects, Blender.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong>Diseño gráfico:</strong> Photoshop, Illustrator.
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong>Desarrollo web:</strong> HTML, CSS, básico en Java.
              </motion.li>
              <motion.li variants={itemVariants}>
                Soporte técnico e infraestructura tecnológica.
              </motion.li>
              <motion.li variants={itemVariants}>
                Manejo de Inteligencia Artificial aplicada a la producción audiovisual.
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Habilidades Blandas */}
          <motion.div variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold mb-2 mt-5" variants={itemVariants}>
              Habilidades Blandas
            </motion.h3>
            <motion.ul className="list-disc ml-5 space-y-2 text-left">
              <motion.li variants={itemVariants}>
                Trabajo en equipo y colaboración.
              </motion.li>
              <motion.li variants={itemVariants}>
                Comunicación efectiva.
              </motion.li>
              <motion.li variants={itemVariants}>
                Creatividad y resolución de problemas.
              </motion.li>
              <motion.li variants={itemVariants}>
                Adaptabilidad a nuevas tecnologías.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EducationAndSkills;
