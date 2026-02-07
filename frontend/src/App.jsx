import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Era from './components/Era'
import RoleSelect from './components/RoleSelect'



function App() {
  const [view, setView] = useState('home') // home | how | era | roles | story
  const eras = [
    {
      title: 'The Great Depression',
      years: '1929–1939',
      rating: 'PG',
      status: 'start',
      image:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'World War II',
      years: '1939–1945',
      rating: 'R',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Apollo 11: Moon Landing',
      years: '1969',
      rating: 'PG',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fall of the Berlin Wall',
      years: '1989',
      rating: 'PG-13',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Chernobyl Disaster',
      years: '1986',
      rating: 'R',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Civil Rights Movement',
      years: '1954–1968',
      rating: 'PG-13',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="app">
      <header className="site-header">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/film.png"
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

      {view === 'roles' && <RoleSelect onChoose={() => setView('story')} />}

      {view === 'story' && <StoryScene onBack={() => setView('roles')} />}
    </div>
  )
}

export default App
