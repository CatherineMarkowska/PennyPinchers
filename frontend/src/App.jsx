import { useState, useEffect, useRef } from 'react'
import './App.css'
import Tile from './components/Tile'
import Era from './components/Era'
import RoleSelect from './components/RoleSelect'
import BankClerkPath from './components/BankClerkPath'
import StayCalmWait from './components/StayCalmWait'
import StoryScene from './components/StoryScene'
import WorkNEarnBranch0 from './components/WorkNEarnBranch-0'
import WorkNEarnBranch1 from './components/WorkNEarnBranch-1'
import WorkNEarnBranch2 from './components/WorkNEarnBranch-2'
import WorkNEarnBranch3 from './components/WorkNEarnBranch-3'
import WorkNEarnBranch4 from './components/WorkNEarnBranch-4'
import WorkNEarnBranch5 from './components/WorkNEarnBranch-5'
import WorkNEarnBranch6 from './components/WorkNEarnBranch-6'
import hopefulAudio from './components/753968__evanboyerman__hopeful-cinematic-emotional-orchestra-background-music.wav'
import endSceneAudio from './components/555803__sergequadrado__sunset-loop.wav'





function App() {
  const [view, setView] = useState('home') // home | now | how | stories | era | roles | bank-clerk | stay-calm | work-earn-0..10 | story
  const bgAudioRef = useRef(null)
  const endAudioRef = useRef(null)
  const [bgAudioEnabled, setBgAudioEnabled] = useState(false)
  const [audioUnlocked, setAudioUnlocked] = useState(false)

  const [ticketEmail, setTicketEmail] = useState('')
  const [ticketPurchased, setTicketPurchased] = useState(false)
  const tileGridRef = useRef(null)
  const eras = [
    {
      title: 'Renaissance',
      years: '1300–1600',
      rating: 'PG',
      description:
        'Witness the rebirth of art, science, and humanism as Europe transforms.',
      status: 'soon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Sandro_Botticelli_-_Idealized_Portrait_of_a_Lady_%28Portrait_of_Simonetta_Vespucci_as_Nymph%29_-_Google_Art_Project.jpg',
    },
    {
      title: 'American Revolution',
      years: '1775–1783',
      rating: 'PG',
      description:
        'Stand at the edge of independence as colonies fight to form a nation.',
      status: 'soon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg',
    },
    {
      title: 'Industrial Revolution',
      years: '1760–1840',
      rating: 'PG',
      description:
        'Factories rise, cities expand, and society reshapes around machines.',
      status: 'soon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Powerloom_weaving_in_1835.jpg/960px-Powerloom_weaving_in_1835.jpg',
    },
    {
      title: 'Roaring Twenties',
      years: '1920–1929',
      rating: 'PG',
      description:
        'Jazz, prohibition, and economic boom before the crash that changed everything.',
      status: 'soon',
      image: 'https://cdn.britannica.com/28/43428-050-2FD5E1F2/Charleston-cover-Life-John-Held-Jr-1926.jpg',
    },
    {
      title: 'The Great Depression',
      years: '1929–1939',
      rating: 'PG',
      featured: true,
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
        'Experience the global conflict that reshaped nations and generations.',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1571840933517-88a527cd7008?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Apollo 11: Moon Landing',
      years: '1969',
      rating: 'PG',
      description:
        'Relive the tension and triumph of one giant leap for mankind.',
      status: 'soon',
      image:
        'https://images.unsplash.com/photo-1614726365930-627c75da663e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Fall of the Berlin Wall',
      years: '1989',
      rating: 'PG-13',
      description:
        'Witness a divided world begin to reunite.',
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
  useEffect(() => {
    if (view !== 'stories') return

    const centerFeatured = () => {
      const container = document.querySelector('.tile-grid')
      const featured = document.querySelector('.tile--featured')

      if (!container || !featured) return

      const offset =
        featured.offsetLeft - container.clientWidth / 2 + featured.clientWidth / 2

      container.scrollTo({
        left: offset,
        behavior: 'auto',
      })
    }

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(centerFeatured)
      setTimeout(centerFeatured, 0)
      return raf2
    })

    const onResize = () => centerFeatured()
    window.addEventListener('resize', onResize)
    window.addEventListener('load', centerFeatured)

    return () => {
      cancelAnimationFrame(raf1)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', centerFeatured)
    }
  }, [view])

  useEffect(() => {
    if (!bgAudioRef.current) return
    if (!bgAudioEnabled || !audioUnlocked) return
    bgAudioRef.current.play().catch(() => {})
  }, [bgAudioEnabled, audioUnlocked])

  useEffect(() => {
    if (!endAudioRef.current || !bgAudioRef.current) return
    if (!audioUnlocked) return

    if (view === 'work-earn-6') {
      bgAudioRef.current.pause()
      endAudioRef.current.currentTime = 0
      endAudioRef.current.play().catch(() => {})
    } else {
      endAudioRef.current.pause()
      endAudioRef.current.currentTime = 0
      if (bgAudioEnabled) {
        bgAudioRef.current.play().catch(() => {})
      }
    }
  }, [view, audioUnlocked, bgAudioEnabled])
  
  
  return (
    <div
      className="app"
      onPointerDown={() => {
        if (audioUnlocked) return
        setAudioUnlocked(true)
        if (bgAudioEnabled && bgAudioRef.current) {
          bgAudioRef.current.play().catch(() => {})
        }
      }}
    >
      <audio ref={bgAudioRef} src={hopefulAudio} preload="auto" loop />
      <audio ref={endAudioRef} src={endSceneAudio} preload="auto" loop />
      <div className="promo-bar">
        Get tickets to see The Great Depression at our Early Access Event on {earlyAccessDate}
      </div>
      <header className="site-header">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000088/63402711-film-clap-board-cinema-sign-white-icon-on-red-circle.jpg"
            alt="Film icon"
          />
          <div>
            <p className="logo-subtitle">Pivot Point</p>
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

          <div className="tile-grid" ref={tileGridRef}>
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

      {view === 'era' && (
        <Era
          onStart={() => setView('roles')}
          onIntroAudioEnd={() => setBgAudioEnabled(true)}
          onIntroAudioStart={() => {
            setBgAudioEnabled(false)
            if (bgAudioRef.current) {
              bgAudioRef.current.pause()
              bgAudioRef.current.currentTime = 0
            }
          }}
        />
      )}

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

      {view === 'bank-clerk' && <BankClerkPath onStayCalm={() => setView('stay-calm')} />}

      {view === 'stay-calm' && <StayCalmWait onWorkEarn={() => setView('work-earn-0')} />}

      {view === 'work-earn-0' && <WorkNEarnBranch0 onNext={() => setView('work-earn-1')} />}
      {view === 'work-earn-1' && <WorkNEarnBranch1 onNext={() => setView('work-earn-2')} />}
      {view === 'work-earn-2' && <WorkNEarnBranch2 onNext={() => setView('work-earn-3')} />}
      {view === 'work-earn-3' && <WorkNEarnBranch3 onNext={() => setView('work-earn-4')} />}
      {view === 'work-earn-4' && <WorkNEarnBranch4 onNext={() => setView('work-earn-5')} />}
      {view === 'work-earn-5' && <WorkNEarnBranch5 onNext={() => setView('work-earn-6')} />}
      {view === 'work-earn-6' && <WorkNEarnBranch6 onNext={() => setView('work-earn-7')} />}
      {view === 'work-earn-7' && <WorkNEarnBranch7 onNext={() => setView('work-earn-8')} />}
      {view === 'work-earn-8' && <WorkNEarnBranch8 onNext={() => setView('work-earn-9')} />}
      {view === 'work-earn-9' && <WorkNEarnBranch9 onNext={() => setView('work-earn-10')} />}
      {view === 'work-earn-10' && <WorkNEarnBranch10 />}

      {view === 'story' && <StoryScene onBack={() => setView('roles')} />}
    </div>
  )
}

export default App
