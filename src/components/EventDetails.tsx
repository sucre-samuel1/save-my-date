import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'react-feather'

interface EventDetailsProps {
  date: Date
}

export const EventDetails = ({ date }: EventDetailsProps) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <section className="my-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-script mb-8 text-center text-primary"
      >
        Event Details
      </motion.h2>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <div className="flex items-start mb-6">
              <Calendar className="text-secondary mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">When</h3>
                <p className="text-gray-600">{formattedDate}</p>
                <p className="text-gray-600">{formattedTime}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="text-secondary mr-4 mt-1" />
             <div>
  <h3 className="text-xl font-semibold text-gray-800">Where</h3>
  <p className="text-gray-600"> Ikola-Odunsi </p>
  <p className="text-gray-600">Lagos, Nigeria</p>

  {/* Button */}
  <button
    onClick={() => window.open("https://example.com/the-grand-ballroom", "_blank")}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    Join Virtual Event
  </button>
</div>

            </div>
          </div>
          <div className="md:w-1/2 bg-gray-100">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.01567999832!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44e2b3816d3%3A0xe23f0a4c7e53a960!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1683037467702!5m2!1sen!2sng"
              width="100%"
              height="100%"
              className="min-h-64 md:min-h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}