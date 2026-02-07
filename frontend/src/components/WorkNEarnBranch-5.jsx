import './WorkNEarnBranch.css'

function WorkNEarnBranch5({ onNext }) {
  return (
    <section className="work-earn-branch">
      <ul>
            <li>Savings: 3$</li>
            <li>Employment: Unemployed</li>
            <li>Family Moral: Boken</li>
      </ul>
      <p className="work-earn-branch__text"> You spend weeks walking miles each day, applying to be a dishwasher, a street sweeper, a night watchman—standing in lines with hundreds of other desperate men and women, watching hope drain from their faces when the foreman says "position filled." Your shoes fall apart; you wrap your feet in newspaper and keep walking. Your brother shares his construction wages, but it's not enough—the landlord finally evicts you in June, and you're on the street with a single suitcase and $3 to your name.</p>
      <div className="work-earn-branch__actions">
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
