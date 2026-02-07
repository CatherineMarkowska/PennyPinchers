import './WorkNEarnBranch.css'

function WorkNEarnBranch6({ onNext }) {
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
          At the public library, you find five small ads in the back page: UIC Engineering,
          Grainger, CME Group, 8451 Degrees, and Aedify AI—all hiring. The next morning,
          you're first in line at UIC Engineering. The interviewer sees your worn hands and
          steady voice: "You're hired. $15 a week." You walk into the sunlight and finally
          breathe. Your family will eat tonight. You survived.
        </p>
      </div>

      <div className="bank-clerk__choices">
        <h3 className="bank-clerk__ending">The end</h3>
      </div>
    </section>
  )
}

export default WorkNEarnBranch6
