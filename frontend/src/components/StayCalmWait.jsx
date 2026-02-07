import './StayCalmWait.css'



function StayCalmWait({ onWorkEarn }) {
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
            <strong>$1200</strong>
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
          You take a deep breath and step away from the chaos. By Friday morning, the
          newspapers report that major banks have pledged to stabilize the market. Your
          manager, impressed by your composure, offers you overtime to work at the counter
          and help panicked customers.
        </p>
      </div>


      <div className="stay-calm__status">
        <p>Savings: $1200</p>
        <p>Employment: Bank Clerk</p>
        <p>Family Moral: Stable</p>
      </div>

      <div className="stay-calm__actions">
         <button type="button" >
          Deny the offer!
        </button>
        <button type="button" >
          DENY THE OFFER! But In uppercase!
        </button>
        <button type="button" onClick={onWorkEarn}>
          Work and earn extra money
        </button>
      </div>
    </section>
  )
}

export default StayCalmWait
