import { motion } from 'framer-motion'
import { Heart } from 'lucide-react';


export const Header = () => {

  return (
    <header className="relative overflow-hidden bg-primary text-black py-16 text-center">
   <div className="absolute inset-0 bg-opacity-20 bg-blue-500"></div>

      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-7xl font-script mb-4">Olatomide & Ifeoluwa</h1>
        <p className="text-xl md:text-2xl mb-6">Are getting introduced!</p>
        
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <Heart className="text-secondary text-4xl mx-auto" />
        </motion.div>
        
        <p className="text-secondary text-xl mt-6">Save the Date</p>
      </motion.div>
    </header>
  )
}