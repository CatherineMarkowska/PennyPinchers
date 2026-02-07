import './WorkNEarnBranch.css'

function WorkNEarnBranch2({ onNext }) {
  return (
    <section className="work-earn-branch">
      <p className="work-earn-branch__text">Your spouse comes home after the first shift with bleeding fingers and $2, collapsing into bed without eating. The work is brutal—twelve hours hunched over sewing machines in a sweatshop with broken ventilation, where consumption spreads like wildfire and women faint from heat exhaustion. But it's money, and money means survival, so every morning at 5 AM your spouse leaves while you care for your brother, who's growing weaker from a construction injury he can't afford to treat.</p>
      <div className="work-earn-branch__actions">
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
