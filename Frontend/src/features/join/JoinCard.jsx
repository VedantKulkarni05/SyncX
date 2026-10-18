import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

// Props: current name value and callbacks for updating and submitting it.
function JoinCard({ inputName, onNameChange, onJoin }) {
  return (
    <section className="relative w-full max-w-[440px] rounded-[var(--radius-card)] border border-border bg-surface p-8 shadow-[var(--shadow-card)] sm:p-10">
      <div className="mb-9">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">SYNCX</p>
        <h1 className="mt-5 font-display text-5xl font-medium italic leading-none tracking-tight text-text sm:text-6xl">Welcome in</h1>
        <p className="mt-4 max-w-xs text-sm leading-6 text-muted">Pick a name and jump into the room.</p>
      </div>
      <Input
        label="Your display name"
        value={inputName}
        onChange={(event) => onNameChange(event.target.value)}
        onSubmit={onJoin}
        placeholder="How should we call you?"
        autoFocus
      />
      <Button type="button" onClick={onJoin} className="mt-5 w-full">
        Enter room
      </Button>
    </section>
  )
}

export default JoinCard
