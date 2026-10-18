import Badge from '../../components/ui/Badge'

// Props: number of collaborators in the room.
function SidebarHeader({ count }) {
  return (
    <header className="flex items-start justify-between border-b border-border pb-5">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">ROOM</p>
        <h2 className="mt-1 font-display text-3xl font-semibold leading-none text-text">Collaborators</h2>
      </div>
      <Badge>{count}</Badge>
    </header>
  )
}

export default SidebarHeader
