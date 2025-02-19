import { useState } from "react";

function VideoCard({ videoId, title, description }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="card bg-base-100  shadow-xl overflow-hidden">
      <div className="card-body">
        <h2 className=" font-bold text-center text-2xl">{title}</h2>
        <p class="font-sans font-semibold">{description}</p>
      </div>
      <div className="relative">
        {isPlaying ? (
          <iframe
            className="w-full h-96 md:h-96"
            src={videoUrl}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen 
          ></iframe>
        ) : (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img className="w-full object-cover h-50" src={thumbnailUrl} alt={title} />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <button className="text-red text-3xl">▶</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoCard;
