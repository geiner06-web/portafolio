import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './constructorVideos';

function VideoCatalog() {
  const videos = [
    {
      videoId: "6HPN2ZASyEA",
      title: "Nota corporativa",
      description: "Esta es una de las notas corporativas que he realizado",
    },
    {
      videoId: "pigXFULw_ps",
      title: "Anuncio de producto",
      description: "Esto es un anuncio de producto que he realizado",
    },
    {
      videoId: "DHDZvr290ZI",
      title: "Animación en After Effects",
      description: "Animación corta en After Effects",
    },
    {
      videoId: "O7qSW79EAJ0",
      title: "Un poco de todo",
      description: "Anuncio realizado con diferentes técnicas de animación",
    },
    {
      videoId: "j5me-gTR230",
      title: "Un poco de todo",
      description: "Anuncio realizado con diferentes técnicas de animación",
    },
    {
      videoId: "m8Y8QoBnFZQ",
      title: "Nota corporativa",
      description: "Esta es una de las notas corporativas que he realizado",
    },
    // Agrega más videos según necesites
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-10 p-3 w-[100%] mx-auto recuadrosVideo">

      {videos.map((video, index) => (
        <motion.div
          key={video.videoId}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <VideoCard
            videoId={video.videoId}
            title={video.title}
            description={video.description}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default VideoCatalog;
