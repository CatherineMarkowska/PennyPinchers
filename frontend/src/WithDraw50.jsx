import './WithDraw50.css'

function WithDraw50() {
  return (
    <section className="withdraw-50">
      <div className="withdraw-50__top">
        <div className="withdraw-50__act">
          <span>Act I of III</span>
          <div className="withdraw-50__dots">
            <span className="is-active" />
            <span className="is-active" />
            <span className="is-active" />
            <span className="is-active" />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <aside className="withdraw-50__status">
          <h3>Your Status</h3>
          <div>
            <p>Savings</p>
            <strong>$50 cash</strong>
          </div>
          <div>
            <p>Employment</p>
            <strong>Unemployed</strong>
          </div>
          <div>
            <p>Family Morale</p>
            <strong>Tense</strong>
          </div>
        </aside>
      </div>
      <div className="withdraw-50__story">
        <p>You take your $50 and visit three other banks over the next two days, each has similar withdrawal limits or longer lines of panicked depositors.</p>
        <p>By Wednesday, October 30th, you return to work to find your own bank's doors closed with a handwritten sign: "Temporary suspension of operations."</p>
        <p>You're out of a job, and $1,150 of your savings has vanished overnight.</p>
      </div>
    </section>
  )
}

export default WithDraw50