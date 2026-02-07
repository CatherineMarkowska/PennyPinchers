import './BankClerkPath.css'

function BankClerkPath({ onStayCalm }) {
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
        <p>The shouting starts before you understand why.</p>
        <p>
          Papers fly. Someone pushes past you. A man screams that the market is collapsing.
        </p>
        <p>October 24, 1929. Thursday morning. The day everything changed.</p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button">Rush to withdraw savings</button>
        <button type="button" onClick={onStayCalm}>
          Stay calm and wait
        </button>
        <button type="button">Call your spouse immediately</button>
      </div>
    </section>
  )
}

export default BankClerkPath
