import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiCheck } from 'react-icons/fi'
import { Check, Mail } from 'lucide-react'

export const RSVP = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [guests, setGuests] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    
    // In a real app, you would send this to your backend
    console.log('RSVP submitted:', { name, email, guests })
    setSubmitted(true)
    setError('')
  }

  return (
    <section className="my-16">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-script mb-8 text-center text-primary"
      >
        RSVP
      </motion.h2>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center"
          >
            <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Check className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
            <p className="text-gray-600">We've received your RSVP and can't wait to celebrate with you.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            
            <div className="mb-8">
              <label htmlFor="guests" className="block text-gray-700 mb-2">Number of Guests</label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition font-medium"
            >
              Submit RSVP
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}