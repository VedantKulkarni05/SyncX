// Props: name and optional className.
function Avatar({ name, className = '' }) {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 font-display text-lg font-semibold text-text ${className}`}>
      {initials}
    </span>
  )
}

export default Avatar
