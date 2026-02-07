import './WorkNEarnBranch.css'

function WorkNEarnBranch4({ onNext }) {
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
          You bundle your spouse in every coat, blanket, and sweater in the apartment, and
          the medicine helps, but the cough lingers for months. By spring of 1931, you're
          all still alive—barely—surviving on your brother's inconsistent construction
          work and your spouse's factory wages, eating oatmeal twice a day and potato peels
          for dinner. Then the factory closes; the owner fled to Europe with the payroll,
          and your spouse comes home with nothing—no final check, no severance, no
          explanation.
        </p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button" onClick={onNext}>
          Apply for every job in the newspaper, no matter how degrading
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch4
