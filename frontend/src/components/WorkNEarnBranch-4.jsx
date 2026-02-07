import './WorkNEarnBranch.css'

function WorkNEarnBranch4({ onNext }) {
  return (
    <section className="work-earn-branch">
      <ul>
            <li>Savings: 0$</li>
            <li>Employment: Unemployed</li>
            <li>Family Moral: Barely holding on</li>
      </ul>
      <p className="work-earn-branch__text">                           You bundle your spouse in every coat, blanket, and sweater in the apartment, and the medicine helps, but the cough lingers for months. By spring of 1931, you're all still alive—barely—surviving on your brother's inconsistent construction work and your spouse's factory wages, eating oatmeal twice a day and potato peels for dinner. Then the factory closes; the owner fled to Europe with the payroll, and your spouse comes home with nothing—no final check, no severance, no explanation.</p>
      <div className="work-earn-branch__actions">
        <button type="button" onClick={onNext}>Apply for every job in the newspaper, no matter how degrading</button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch4
