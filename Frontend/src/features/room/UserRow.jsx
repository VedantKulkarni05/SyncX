import Avatar from '../../components/ui/Avatar'
import StatusDot from '../../components/ui/StatusDot'

// Props: collaborator name and whether this is the current user.
function UserRow({ name, isCurrentUser }) {
  return (
    <li className={`flex items-center gap-3 rounded-[var(--radius-control)] border px-3 py-3 transition duration-200 ${isCurrentUser ? 'border-accent/60 bg-accent-soft' : 'border-transparent hover:border-border hover:bg-surface-2/60'}`}>
      <Avatar name={name} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-text">{name}</p>
        {isCurrentUser && <p className="text-xs text-muted">(You)</p>}
      </div>
      <StatusDot />
    </li>
  )
}

export default UserRow
