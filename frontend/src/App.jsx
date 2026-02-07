import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Era from './components/Era'
import RoleSelect from './components/RoleSelect'



function App() {
  const [view, setView] = useState('home') // home | era | roles | story
  const eras = [
    {
      title: 'The Great Depression',
      years: '1929–1939',
      rating: 'PG',
      status: 'start',
      image:
        'https://unsplash.com/photos/man-in-black-and-red-jacket-holding-brown-wooden-stick-rJ6tenVnp9A',
    },
    {
      title: 'World War II',
      years: '1939–1945',
      rating: 'R',
      status: 'soon',
      image:
        'https://unsplash.com/photos/three-monoplanes-squadron-in-world-war-2-oyGmigXV030',
    },
    {
      title: 'Apollo 11: Moon Landing',
      years: '1969',
      rating: 'PG',
      status: 'soon',
      image:
        'https://unsplash.com/photos/buzz-aldrin-on-the-moon-in-front-of-the-us-flag-UeSpvB0Qo88',
    },
    {
      title: 'Fall of the Berlin Wall',
      years: '1989',
      rating: 'PG-13',
      status: 'soon',
      image:
        'https://assets.pewresearch.org/wp-content/uploads/sites/12/2014/10/FT_14.10.15_berlinWallPhoto.jpg',
    {
      title: 'Chernobyl Disaster',
      years: '1986',
      rating: 'R',
      status: 'soon',
      image:
        'https://unsplash.com/photos/yellow-and-black-house-on-brown-grass-field-q-QZw_s97Oc',
    },
    {
      title: 'Civil Rights Movement',
      years: '1954–1968',
      rating: 'PG-13',
      status: 'soon',
      image:
        'https://unsplash.com/photos/civil-rights-march-on-washington-dc-WzPxmB_tRlw',
    },
  ]

  return (
    <div className="app">
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
          <a href="#how">How It Works</a>
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

      {view === 'era' && <Era onStart={() => setView('roles')} />}

      {view === 'roles' && <RoleSelect onChoose={() => setView('story')} />}

      {view === 'story' && <StoryScene onBack={() => setView('roles')} />}
    </div>
  )
}

export default App
