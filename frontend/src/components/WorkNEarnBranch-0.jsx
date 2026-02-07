import './WorkNEarnBranch.css'

function WorkNEarnBranch0({ onNext }) {
  return (
    <section className="work-earn-branch">
      <p className="work-earn-branch__text">You demand access to your full savings, voice rising. You worked overtime while others fled, you deserve better. The manager's face hardens. He calls security and terminates you on the spot for insubordination, and suddenly you're on the street with no job, no income, and only $50 to your name. By the time you get home, your spouse is waiting with more bad news: the landlord is raising rent, and your brother just arrived from Ohio. He lost his farm and needs a place to stay.</p>
      <div className="work-earn-branch__actions">
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
