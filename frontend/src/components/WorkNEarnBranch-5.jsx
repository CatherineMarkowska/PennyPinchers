import './WorkNEarnBranch.css'

function WorkNEarnBranch5({ onNext }) {
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
          You spend weeks walking miles each day, applying to be a dishwasher, a street
          sweeper, a night watchman—standing in lines with hundreds of other desperate men
          and women, watching hope drain from their faces when the foreman says "position
          filled." Your shoes fall apart; you wrap your feet in newspaper and keep walking.
          Your brother shares his construction wages, but it's not enough—the landlord
          finally evicts you in June, and you're on the street with a single suitcase and
          $3 to your name.
        </p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button" onClick={onNext}>
          Try one last time—check the help-wanted ads
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch5
