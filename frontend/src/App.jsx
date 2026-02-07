import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Era from './components/Era'
import RoleSelect from './components/RoleSelect'

import BankClerkPath from './components/BankClerkPath'



function App() {
  const [view, setView] = useState('home') // home | how | era | roles | story
  const eras = [
    {
      title: 'The Great Depression',
      years: '1929–1939',
      rating: 'PG',
      description:
        'Step into the era of breadlines and dust storms as families fight to endure. Follow everyday lives shaped by hardship, resilience, and hope.',
      status: 'start',
      image:
        'https://unsplash.com/photos/man-in-black-and-red-jacket-holding-brown-wooden-stick-rJ6tenVnp9A',
    },
    {
      title: 'World War II',
      years: '1939–1945',
      rating: 'R',
      description:
        'Move through the global conflict that reshaped nations and generations. Experience the home front, the front lines, and the choices in between.',
      status: 'soon',
      image:
        'https://unsplash.com/photos/three-monoplanes-squadron-in-world-war-2-oyGmigXV030',
    },
    {
      title: 'Apollo 11: Moon Landing',
      years: '1969',
      rating: 'PG',
      description:
        'Relive the race to the moon and the tension inside Mission Control. Discover the courage and innovation behind one giant leap.',
      status: 'soon',
      image:
        'https://unsplash.com/photos/buzz-aldrin-on-the-moon-in-front-of-the-us-flag-UeSpvB0Qo88',
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
    {
      title: 'Chernobyl Disaster',
      years: '1986',
      rating: 'R',
      description:
        'Enter the tense hours after the reactor failure and the race to contain it. See the human cost and the bravery that followed.',
      status: 'soon',
      image:
        'https://unsplash.com/photos/yellow-and-black-house-on-brown-grass-field-q-QZw_s97Oc',
    },
    {
      title: 'Civil Rights Movement',
      years: '1954–1968',
      rating: 'PG-13',
      description:
        'Walk alongside organizers, students, and leaders in the fight for justice. From sit-ins to marches, courage builds a new future.',
      status: 'soon',
      image:
        'https://unsplash.com/photos/civil-rights-march-on-washington-dc-WzPxmB_tRlw',
    },
  ]

  return (
    <div className="app">
      <div className="promo-bar">
        Get Tickets to see The Great Depression at our Early Access Event on 2/7 and score a Roar Pack!
      </div>
      <header className="site-header">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://www.123rf.com/photo_63402711_film-clap-board-cinema-sign-white-icon-on-red-circle.html"
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
          <a href="#now">Now Showing</a>
          <button className="ghost-btn" type="button" onClick={() => setView('how')}>
            How It Works
          </button>
          <a href="#stories">Stories</a>
        </nav>
      </header>

      {view === 'home' && (
        <section id="now" className="now-showing">
          <div className="section-title">
            <h3>Now Showing</h3>
            <p>Tap a story tile to enter a different era.</p>
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
              <button className="primary-btn" type="button" onClick={() => setView('era')}>
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
