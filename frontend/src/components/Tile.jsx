import './Tile.css'

function Tile({ era, onStart }) {
  return (
    <article className="tile">
      <div
        className="tile-image"
        style={{ backgroundImage: `url(${era.image})` }}
        role="img"
        aria-label={era.title}
      >
        <div className="tile-header">
          <span className="tile-logo">H</span>
          <span>History</span>
        </div>
      </div>
      <div className="tile-content">
        <h4>{era.title}</h4>
        <p>{era.years}</p>
        <div className="tile-meta">
          <span>{era.rating}</span>
        </div>
        <p className="tile-description">{era.description}</p>
      </div>
      {era.status === 'start' ? (
        <button className="primary-btn tile-btn" type="button" onClick={onStart}>
          Start
        </button>
      ) : (
        <button className="ghost-btn tile-btn" type="button" disabled>
          Coming Soon
        </button>
      )}
    </article>
  )
}

export default Tile
