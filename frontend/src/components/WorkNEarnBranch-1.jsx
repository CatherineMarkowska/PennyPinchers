import './WorkNEarnBranch.css'

function WorkNEarnBranch1({ onNext }) {
  return (
    <section className="work-earn-branch">
      <ul>
            <li>Savings: 15$</li>
            <li>Employment: Unemployed</li>
            <li>Family Moral: Strained</li>
      </ul>
      <p className="work-earn-branch__text"> Your brother moves into the cramped apartment, and for two weeks the three of you survive on his last $30 and your $50, splitting watery soup and stale bread. He finally finds work at a construction site paying $3 a day, but it's dangerous. Yesterday a man fell from scaffolding and the company paid nothing to his widow. Meanwhile, you're still unemployed, the rent is due in three days, and your spouse found a classified ad: "Women wanted for garment factory - $2/day, 12-hour shifts."</p>
      <div className="work-earn-branch__actions">
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
