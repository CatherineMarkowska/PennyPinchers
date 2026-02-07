import './WorkNEarnBranch.css'

function WorkNEarnBranch0({ onNext }) {
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
          You demand access to your full savings, voice rising. You worked overtime while
          others fled, you deserve better. The manager's face hardens. He calls security and
          terminates you on the spot for insubordination, and suddenly you're on the street
          with no job, no income, and only $50 to your name. By the time you get home, your
          spouse is waiting with more bad news: the landlord is raising rent, and your
          brother just arrived from Ohio. He lost his farm and needs a place to stay.
        </p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button" onClick={onNext}>
          Take your brother in Family comes first!
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch0
