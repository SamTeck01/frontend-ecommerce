import gallery1 from '../assets/Battery Category.jpg';
import gallery2 from '../assets/Battery Category.jpg';
//import installVideo from '../assets/install.mp4'; // Add local video files or use hosted URLs

import { useState } from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function GalleryPro() {
  const media = [
    { type: 'image', src: gallery1, alt: 'Office inverter setup' },
    //{ type: 'video', src: installVideo, alt: 'Video: Solar installation walkthrough' },
    { type: 'image', src: gallery2, alt: 'IoT device mounted and configured' },
    // Add more media here
  ];

  const [modalMedia, setModalMedia] = useState(null);

  return (
    <section className="px-4 pt-24 text-black p-8">
        <div className="container mx-auto flexCenter flex-col">
            <h1 className="text-3xl font-bold text-center mb-6">Bee Energy Gallery</h1>
            <p className="text-center text-ash max-w-2xl mx-auto mb-12">
                Explore our gallery to see how we bring solar solutions to life. From installations to IoT integrations, we capture the essence of innovation in every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {media.map((item, index) => (
                    <motion.div
                        className={`rounded-2xl bg-white shadow-sm overflow-hidden w-[280px] min-w-[200px] h-[280px] min-h-[200px] mb-2 cursor-pointer group`}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        key={index}
                        onClick={() => setModalMedia(item)}
                    >
                        {item.type === 'image' ? (
                            <img src={item.src} alt={item.alt} className="w-full h-60 object-cover cursor-pointer group-hover:scale-105 transition duration-300" />
                        ) : (
                            <video src={item.src} className="w-full h-64 object-cover" muted autoPlay loop />
                        )}
                        <p className="mt-2 text-center text-black">{item.alt}</p>
                    </motion.div>
                ))}
            </div>

            {modalMedia && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setModalMedia(null)}>
                <div className="max-w-4xl w-full px-4">
                    {modalMedia.type === 'image' ? (
                    <img src={modalMedia.src} alt={modalMedia.alt} className="w-full rounded-lg" />
                    ) : (
                    <video src={modalMedia.src} controls className="w-full rounded-lg" />
                    )}
                    <p className="mt-4 text-center text-gold">{modalMedia.alt}</p>
                </div>
                </div>
            )}
        </div>
    </section>
  );
}
