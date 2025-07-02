import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 text-center bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <p className="text-gray-600 flex items-center justify-center">
          Made with <Heart className="mx-1 text-secondary" /> by Olatomide & Ifeoluwa
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Our Introduction. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}