import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export const Header = () => {
  return (
    <header className="relative overflow-hidden bg-primary text-black py-24 text-center">
      {/* Floral background with overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] 
        bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-fuchsia-500/30 backdrop-blur-sm"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-script mb-4">Olatomide & Ifeoluwa</h1>
        <p className="text-xl md:text-2xl mb-6">Are getting introduced!</p>
        
        {/* Enhanced beating heart */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0] // Gentle wiggle
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 1] // Timing for each keyframe
          }}
          className="inline-block my-4"
        >
          <Heart 
            className="text-secondary text-9xl mx-auto" 
            fill="red" // Makes heart solid
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-secondary text-xl mt-6 font-medium tracking-wider"
        >
          Save the Date
        </motion.p>
         <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-secondary text-xl mt-6 font-medium tracking-wider"
        >
          05/07/2025
        </motion.p>
      </motion.div>
    </header>
  )
}