import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Era from './components/Era'
import RoleSelect from './components/RoleSelect'

import BankClerkPath from './components/BankClerkPath'



function App() {
  const [view, setView] = useState('home') // home | now | how | stories | era | roles | story
  const [ticketEmail, setTicketEmail] = useState('')
  const [ticketPurchased, setTicketPurchased] = useState(false)
  const eras = [
    {
      title: 'The Great Depression',
      years: '1929–1939',
      rating: 'PG',
      description:
        'Step into the era of breadlines and dust storms as families fight to endure. Follow everyday lives shaped by hardship, resilience, and hope.',
      status: 'start',
      image:
        'https://images.unsplash.com/photo-1587553906014-b2b4060dd6f5?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'World War II',
      years: '1939–1945',
      rating: 'R',
      description:
        'Move through the global conflict that reshaped nations and generations. Experience the home front, the front lines, and the choices in between.',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1571840933517-88a527cd7008?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Apollo 11: Moon Landing',
      years: '1969',
      rating: 'PG',
      description:
        'Relive the race to the moon and the tension inside Mission Control. Discover the courage and innovation behind one giant leap.',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1614726365930-627c75da663e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Fall of the Berlin Wall',
      years: '1989',
      rating: 'PG-13',
      description:
        'Witness the night a city and a world changed forever. Follow voices from both sides as freedom breaks through concrete.',
      status: 'soon',
      image:
        'https://assets.pewresearch.org/wp-content/uploads/sites/12/2014/10/FT_14.10.15_berlinWallPhoto.jpg',
      },  
      {
      title: 'Chernobyl Disaster',
      years: '1986',
      rating: 'R',
      description:
        'Enter the tense hours after the reactor failure and the race to contain it. See the human cost and the bravery that followed.',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1590355200067-675cf378fb74?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    {
      title: 'Civil Rights Movement',
      years: '1954–1968',
      rating: 'PG-13',
      description:
        'Walk alongside organizers, students, and leaders in the fight for justice. From sit-ins to marches, courage builds a new future.',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1576568699714-a3f4950805d5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]
  const nowShowing = eras.filter((era) => era.status === 'start')
  const earlyAccessDate = 'February 7, 2026'

  return (
    <div className="app">
      <div className="promo-bar">
        Get tickets to see The Great Depression at our Early Access Event on {earlyAccessDate} and score a Roar Pack!
      </div>
      <header className="site-header">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000088/63402711-film-clap-board-cinema-sign-white-icon-on-red-circle.jpg"
            alt="Film icon"
          />
          <div>
            <p className="logo-subtitle">Immersive Era Stories</p>
          </div>
        </div>
        <nav className="site-nav">
          <button className="ghost-btn" type="button" onClick={() => setView('home')}>
            Home
          </button>
          <button className="ghost-btn" type="button" onClick={() => setView('now')}>
            Now Showing
          </button>
          <button className="ghost-btn" type="button" onClick={() => setView('how')}>
            How It Works
          </button>
          <button className="ghost-btn" type="button" onClick={() => setView('stories')}>
            Stories
          </button>
        </nav>
      </header>

      {view === 'home' && (
        <section className="home-hero">
          <div>
            <p className="home-kicker">Interactive History</p>
            <h1>Relive history through the choices you make</h1>
            <p className="home-lede">
              Step into pivotal eras, play as everyday people, and experience how one
              decision can change everything.
            </p>
            <div className="home-actions">
              <button className="primary-btn" type="button" onClick={() => setView('now')}>
                Explore Now Showing
              </button>
              <button className="ghost-btn" type="button" onClick={() => setView('how')}>
                How It Works
              </button>
            </div>
          </div>
          <div className="home-preview">
            <h3>Featured Era</h3>
            <p>The Great Depression</p>
            <span>Early access on {earlyAccessDate}</span>
          </div>
        </section>
      )}

      {view === 'now' && (
        <section id="now" className="now-showing now-showing--split">
          <div className="now-left">
            <p className="now-kicker">Now Showing</p>
            <h1>{nowShowing[0]?.title}</h1>
            <p className="now-lede">
              {nowShowing[0]?.description} Early access opens on {earlyAccessDate}.
            </p>
            <button className="primary-btn" type="button" onClick={() => setView('era')}>
              Enter The Story
            </button>
          </div>

          <div className="now-poster">
            <div className="now-poster-frame">
              <img src={nowShowing[0]?.image} alt={nowShowing[0]?.title} />
              <div className="now-poster-overlay">
                <span>{nowShowing[0]?.years}</span>
                <strong>{nowShowing[0]?.rating}</strong>
              </div>
            </div>
          </div>

          <div className="now-right">
            <p className="now-right-kicker">Early Access Event</p>
            <h2>
              Get Your <span>Tickets</span> Now
            </h2>
            <p>
              Reserve your seat for the Great Depression launch and unlock exclusive
              behind-the-scenes content.
            </p>
            <form
              className="now-ticket-form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!ticketEmail.trim()) return
                setTicketPurchased(true)
              }}
            >
              <label htmlFor="ticket-email">Email for ticket delivery</label>
              <input
                id="ticket-email"
                type="email"
                placeholder="you@example.com"
                value={ticketEmail}
                onChange={(event) => setTicketEmail(event.target.value)}
                required
              />
              <button className="primary-btn" type="submit">
                Purchase Tickets
              </button>
              <span className="now-ticket-date">Event date: {earlyAccessDate}</span>
              {ticketPurchased && (
                <p className="ticket-confirmation">
                  Ticket reserved! We will email your pass shortly.
                </p>
              )}
            </form>
          </div>
        </section>
      )}

      {view === 'stories' && (
        <section id="stories" className="stories-showing">
          <div className="section-title">
            <h3>Stories</h3>
            <p>Explore every era and see what's coming next.</p>
          </div>

          <div className="tile-grid">
            {eras.map((era) => (
              <Tile
                key={era.title}
                era={era}
                onStart={era.status === 'start' ? () => setView('era') : undefined}
              />
            ))}
          </div>
        </section>
      )}

      {view === 'how' && (
        <section id="how" className="how-it-works">
          <div className="how-hero">
            <p className="how-kicker">How It Works</p>
            <h1>Step into history, one choice at a time</h1>
            <p className="how-lede">
              Each story drops you into a pivotal historical era. Your choices shape the
              story, your relationships, and the outcome.
            </p>
            <div className="how-actions">
              <button className="primary-btn" type="button" onClick={() => setView('now')}>
                Get Tickets
              </button>
              <button className="ghost-btn" type="button" onClick={() => setView('home')}>
                Back To Home
              </button>
            </div>
          </div>

          <div className="how-grid">
            <div className="how-card">
              <h3>Choose a Role</h3>
              <p>
                Select a role and starting resources. Each role unlocks different pressures,
                opportunities, and perspectives.
              </p>
            </div>
            <div className="how-card">
              <h3>Face Daily Decisions</h3>
              <p>
                Work, family, safety, and loyalty collide in every era. Pick your
                priorities and feel the consequences.
              </p>
            </div>
            <div className="how-card">
              <h3>Watch The Story Shift</h3>
              <p>
                Your choices ripple across the community. The narrative branches into
                different paths and endings.
              </p>
            </div>
          </div>

          <div className="how-highlight">
            <div>
              <h2>Multiple Eras, Multiple Paths</h2>
              <p>
                Play through events like the Great Depression, the fall of the Berlin Wall,
                or the Chernobyl disaster. Each era has its own stakes, dilemmas, and
                endings.
              </p>
            </div>
            <div className="how-stats">
              <div>
                <span>Stories</span>
                <strong>Multiple Eras</strong>
              </div>
              <div>
                <span>Perspective</span>
                <strong>Everyday People</strong>
              </div>
              <div>
                <span>Gameplay</span>
                <strong>Branching Choices</strong>
              </div>
            </div>
          </div>
        </section>
      )}

      {view === 'era' && <Era onStart={() => setView('roles')} />}

      {view === 'roles' && (
        <RoleSelect
          onChoose={(roleKey) => {
            if (roleKey === 'bank-clerk') {
              setView('bank-clerk')
            } else {
              setView('story')
            }
          }}
        />
      )}

      {view === 'bank-clerk' && <BankClerkPath />}

      {view === 'story' && <StoryScene onBack={() => setView('roles')} />}
    </div>
  )
}

export default App
