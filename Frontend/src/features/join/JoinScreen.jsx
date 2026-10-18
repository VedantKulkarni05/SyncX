import JoinCard from './JoinCard'

// Props: current name value and callbacks for updating and submitting it.
function JoinScreen({ inputName, onNameChange, onJoin }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-5 py-10">
      <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] opacity-80" />
      <div className="relative flex w-full justify-center">
        <JoinCard inputName={inputName} onNameChange={onNameChange} onJoin={onJoin} />
      </div>
    </main>
  )
}

export default JoinScreen
