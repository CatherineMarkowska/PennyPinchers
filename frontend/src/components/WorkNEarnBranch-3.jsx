import './WorkNEarnBranch.css'

function WorkNEarnBranch3({ onNext }) {
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
          You sell the dining table, the chairs, your mother's rocking chair—everything
          but the mattress you all share. Your brother's fever breaks after three days on
          medicine, and he's back at the construction site within a week, but now you eat
          sitting on the floor and the apartment echoes with emptiness. Winter arrives
          early in 1930, and without furniture to burn, the cold seeps through the walls;
          your spouse develops a rattling cough that sounds like the beginning of
          pneumonia.
        </p>
      </div>

      <div className="bank-clerk__choices">
        <button type="button" onClick={onNext}>
          Use the $8 for medicine and wear every piece of clothing you own
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch3
