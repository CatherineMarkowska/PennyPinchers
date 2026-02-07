import './SuspendedBanks.css'

function SuspendedBanks() {
  return (
    <section className="suspended-banks">
      <div className="suspended-banks__top">
        <div className="suspended-banks__act">
          <span>Act I of III</span>
          <div className="suspended-banks__dots">
            <span className="is-active" />
            <span className="is-active" />
            <span className="is-active" />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <aside className="suspended-banks__status">
          <h3>Your Status</h3>
          <div>
            <p>Savings</p>
            <strong>$1,200</strong>
          </div>
          <div>
            <p>Employment</p>
            <strong>Bank Clerk</strong>
          </div>
          <div>
            <p>Family Morale</p>
            <strong>Stable</strong>
          </div>
        </aside>
      </div>
      <div className="suspended-banks__story">
        <p>The line outside the bank stretches around the block.</p>
        <p>You've been waiting three hours. The woman in front of you is crying. Behind you, arguments break out.</p>
        <p>The bank doors remain closed. A sign appears:</p>
        <p>"Temporarily suspended operations."</p>
      </div>
      <div className="suspended-banks__choices">
        <button type="button">Stay in line. You need that money.</button>
        <button type="button">Go home. Come back tomorrow.</button>
        <button type="button">Demand to speak to someone.</button>
      </div>
    </section>
  )
}

export default SuspendedBanks