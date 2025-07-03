import { Header } from './components/Header'
import { Countdown } from './components/Countdown'
import { EventDetails } from './components/EventDetails'
import { Gallery } from './components/Gallery'
import { RSVP } from './components/RSVP'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const weddingDate = new Date('2025-07-05T10:00:00') // Update with your date
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Countdown targetDate={weddingDate} />
        <EventDetails date={weddingDate} />
        {/* <Gallery /> */}
        {/* <RSVP /> */}
      </main>
      
      <Footer />
    </div>
  )
}

export default App