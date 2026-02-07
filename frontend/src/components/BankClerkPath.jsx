import { useState } from 'react'
import './BankClerkPath.css'
import SuspendedBank from './SuspendedBank'

function BankClerkPath({ onStayCalm }) {
  const [scene, setScene] = useState('intro') // intro | withdraw | stay-line

  const storyByScene = {
    intro: [
      'The shouting starts before you understand why.',
      'Papers fly. Someone pushes past you. A man screams that the market is collapsing.',
      'October 24, 1929. Thursday morning. The day everything changed.',
    ],
    'stay-line': [
      "Five hours. You've been standing for five hours.",
      'Then the announcement: "The bank will not reopen today. Please return tomorrow."',
      'Tomorrow. Tomorrow. Tomorrow. You wonder if tomorrow will ever come.',
    ],
  }

  if (scene === 'withdraw') {
    return (
      <SuspendedBank
        onStayInLine={() => setScene('stay-line')}
        onGoHome={() => setScene('intro')}
        onDemand={() => setScene('intro')}
      />
    )
  }

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
        {storyByScene[scene].map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="bank-clerk__choices">
        {scene === 'intro' ? (
          <>
            <button type="button" onClick={() => setScene('withdraw')}>
              Rush to withdraw savings
            </button>
            <button type="button" onClick={onStayCalm}>
              Stay calm and wait
            </button>
            <button type="button">Call your spouse immediately</button>
          </>
        ) : (
          <>
            <button type="button">Accept reality and go home</button>
            <button type="button">Join others in protest</button>
            <button type="button">Make a plan for tomorrow</button>
          </>
        )}
      </div>

    </section>
  )
}

export default BankClerkPath
