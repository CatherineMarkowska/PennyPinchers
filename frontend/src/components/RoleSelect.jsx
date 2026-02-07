import RoleCard from './RoleCard'
import './RoleSelect.css'

function RoleSelect({ onChoose }) {
  const roles = [
    {
      title: 'A Bank Clerk',
      description:
        "You work at the Third National Bank. You see the numbers. You know what's coming.",
      savings: '$1,200',
      key: 'bank-clerk',
    },
    {
      title: 'A Factory Worker',
      description:
        'You build automobiles at the Ford plant. Your hands are strong, but your job is fragile.',
      savings: '$850',
      key: 'factory-worker',
    },
    {
      title: 'A Small Business Owner',
      description:
        'You own a corner store. Your customers are your neighbors. Their struggle is yours.',
      savings: '$2,400',
      key: 'small-business',
    },
  ]

  return (
    <section className="role-select">
      <header className="role-header">
        <h1>You are:</h1>
        <p>Choose your role. Your story begins here.</p>
      </header>
      <div className="role-grid">
        {roles.map((role) => (
          <RoleCard key={role.title} role={role} onChoose={() => onChoose(role.key)} />
        ))}
      </div>
    </section>
  )
}

export default RoleSelect
