import './StoryScene.css'

function StoryScene({ onBack }) {
  return (
    <section className="story-scene">
      <p>Story continues...</p>
      <button type="button" onClick={onBack}>
        Back to Roles
      </button>
    </section>
  )
}

export default StoryScene
