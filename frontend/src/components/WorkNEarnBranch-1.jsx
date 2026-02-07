import './WorkNEarnBranch.css'

function WorkNEarnBranch1({ onNext }) {
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
          Your brother moves into the cramped apartment, and for two weeks the three of you
          survive on his last $30 and your $50, splitting watery soup and stale bread. He
          finally finds work at a construction site paying $3 a day, but it's dangerous.
          Yesterday a man fell from scaffolding and the company paid nothing to his widow.
          Meanwhile, you're still unemployed, the rent is due in three days, and your
          spouse found a classified ad: "Women wanted for garment factory - $2/day, 12-hour
          shifts."
        </p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button" onClick={onNext}>
          Your spouse takes the factory job!
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch1
