import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./commons/header";
import Hero from "./commons/hero";
import VideoCatalog from "./commons/editor";
import DisenoGrafico from "./commons/disenoGrafico";
import Desarrollo from "./commons/desarrollador";
import Education from "./commons/educacion";
import EducationAndSkills from "./commons/educacion";
import Contacto from "./commons/contacto";
import Footer from "./commons/footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main class="min-h-screen ">
        <Hero />

        <section >
          <h2 className="text-2xl font-bold mt-20">
            Conoce más sobre mi trabajo Audio Visual
          </h2>
          <p id="trabajos" className="text-ml mt-5 leading-8 text-justify p-2">
            Como productor audiovisual, tengo experiencia en la creación de
            comerciales y videos corporativos, desde la planificación y el guion
            hasta la grabación y edición. Manejo herramientas como Adobe
            Premiere Pro, After Effects, Photoshop e Illustrator, además de
            Blender para animaciones y gráficos en 3D. También soy camarógrafo y
            piloto de dron, lo que me permite capturar imágenes desde distintas
            perspectivas para darle un valor extra a cada producción. Siempre
            busco que cada proyecto cuente una historia de forma clara, creativa
            y profesional.
          </p>
          <h3 className="font-bold text-xl mt-10 text-center">Mira algunos de mis videos</h3>
        </section>

        <section >
          <VideoCatalog />
        </section>

        <section>
          <DisenoGrafico />
          </section>
          <section>
            <Desarrollo />
          </section>

          <section id="educacion">
            <EducationAndSkills />
          </section>

          <section id="contacto">
            <Contacto />
          </section>
          <footer>
            <Footer />
          </footer>
      </main>
    </>
  );
}

export default App;
