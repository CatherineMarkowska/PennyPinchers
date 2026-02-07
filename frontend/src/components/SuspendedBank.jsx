import './SuspendedBank.css'

function SuspendedBank({ onStayInLine, onGoHome, onDemand }) {
  return (
    <section className="bank-clerk">
      <div className="bank-clerk__top">
        <div className="bank-clerk__act">
          <span>Act I of III</span>
          <div className="bank-clerk__dots">
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
        <aside className="bank-clerk__status">
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
      <div className="bank-clerk__story">
        <p>The line outside the bank stretches around the block.</p>
        <p>
          You've been waiting three hours. The woman in front of you is crying. Behind you,
          arguments break out.
        </p>
        <p>The bank doors remain closed. A sign appears:</p>
        <p>"Temporarily suspended operations."</p>
      </div>
      <div className="bank-clerk__choices">
        <button type="button" onClick={onStayInLine}>
          Stay in line. You need the money.
        </button>
        <button type="button" onClick={onGoHome}>
          Go home. Come back tomorrow.
        </button>
        <button type="button" onClick={onDemand}>
          Demand to speak to someone.
        </button>
      </div>
    </section>
  )
}

export default SuspendedBank
