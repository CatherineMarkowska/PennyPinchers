import './StayCalmWait.css'

<<<<<<< HEAD
function StayCalmWait() {
  return (
    <section className="stay-calm">
      <p className="stay-calm__text">
        You take a deep breath and step away from the chaos. By Friday morning, the
        newspapers report that major banks have pledged to stabilize the market. Your
        manager, impressed by your composure, offers you overtime to work at the counter
        and help panicked customers.
      </p>
=======
function StayCalmWait({ onWorkEarn }) {
  return (
    <section className="stay-calm">
      <div className="stay-calm__card">
        <p>
          You take a deep breath and step away from the chaos. By Friday morning, the
          newspapers report that major banks have pledged to stabilize the market. Your
          manager, impressed by your composure, offers you overtime to work at the counter
          and help panicked customers.
        </p>
      </div>

>>>>>>> tan-branch
      <div className="stay-calm__status">
        <p>Savings: $1200</p>
        <p>Employment: Bank Clerk</p>
        <p>Family Moral: Stable</p>
      </div>
<<<<<<< HEAD
=======
      <div className="stay-calm__actions">
        <button type="button">Decline overtime and rush home</button>
        <button type="button" onClick={onWorkEarn}>
          Work the counter and earn the money
        </button>
        <button type="button">Withdraw your savings</button>
      </div>
>>>>>>> tan-branch
    </section>
  )
}

export default StayCalmWait
