import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import installVideo from '../assets/install.mp4'; // Add local video files or use hosted URLs

import { useState } from 'react';

export default function GalleryPro() {
  const media = [
    { type: 'image', src: gallery1, alt: 'Office inverter setup' },
    { type: 'video', src: installVideo, alt: 'Video: Solar installation walkthrough' },
    { type: 'image', src: gallery2, alt: 'IoT device mounted and configured' },
    // Add more media here
  ];

  const [modalMedia, setModalMedia] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center tracking-wide">🚨 Tech Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {media.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-xl transform transition hover:scale-105 cursor-pointer"
            onClick={() => setModalMedia(item)}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
            ) : (
              <video src={item.src} className="w-full h-64 object-cover" muted autoPlay loop />
            )}
            <p className="mt-2 text-center text-gray-300">{item.alt}</p>
          </div>
        ))}
      </div>

      {modalMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setModalMedia(null)}>
          <div className="max-w-4xl w-full px-4">
            {modalMedia.type === 'image' ? (
              <img src={modalMedia.src} alt={modalMedia.alt} className="w-full rounded-lg" />
            ) : (
              <video src={modalMedia.src} controls className="w-full rounded-lg" />
            )}
            <p className="mt-4 text-center text-gray-400">{modalMedia.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
