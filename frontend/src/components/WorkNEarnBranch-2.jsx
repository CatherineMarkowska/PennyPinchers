import './WorkNEarnBranch.css'

function WorkNEarnBranch2({ onNext }) {
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
        <p>
          Your spouse comes home after the first shift with bleeding fingers and $2,
          collapsing into bed without eating. The work is brutal—twelve hours hunched over
          sewing machines in a sweatshop with broken ventilation, where consumption spreads
          like wildfire and women faint from heat exhaustion. But it's money, and money
          means survival, so every morning at 5 AM your spouse leaves while you care for
          your brother, who's growing weaker from a construction injury he can't afford to
          treat.
        </p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button" onClick={onNext}>
          sell your furniture to pay for your brother's medicine!
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch2
