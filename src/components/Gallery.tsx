import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    alt: 'Couple on beach'
  },
  {
    src: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00',
    alt: 'Proposal moment'
  },
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e',
    alt: 'Engagement photo'
  },
  {
    src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
    alt: 'Together in nature'
  },
]

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="my-16">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-script mb-8 text-center text-primary"
      >
        Our Story
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={`${image.src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FiX />
          </button>
          <img
            src={`${images[selectedImage].src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  )
}