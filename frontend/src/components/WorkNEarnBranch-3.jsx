import './WorkNEarnBranch.css'

function WorkNEarnBranch3({ onNext }) {
  return (
    <section className="work-earn-branch">
      <ul>
            <li>Savings: 8$</li>
            <li>Employment: Unemployed</li>
            <li>Family Moral: Strained</li>
        </ul>
      <p className="work-earn-branch__text">                 You sell the dining table, the chairs, your mother's rocking chair—everything but the mattress you all share. Your brother's fever breaks after three days on medicine, and he's back at the construction site within a week, but now you eat sitting on the floor and the apartment echoes with emptiness. Winter arrives early in 1930, and without furniture to burn, the cold seeps through the walls; your spouse develops a rattling cough that sounds like the beginning of pneumonia.</p>
      <div className="work-earn-branch__actions">
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
