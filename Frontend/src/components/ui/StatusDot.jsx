// Props: whether the collaborator is online.
function StatusDot({ online = true }) {
  return (
    <span
      className={`h-2.5 w-2.5 rounded-full ${online ? 'bg-accent shadow-[0_0_0_4px_var(--accent-soft)]' : 'bg-muted/50'}`}
      aria-label={online ? 'Online' : 'Offline'}
    />
  )
}

export default StatusDot
