// Props: children and standard span props.
function Badge({ children, ...props }) {
  return (
    <span
      {...props}
      className="inline-flex min-w-7 items-center justify-center rounded-full bg-accent-soft px-2 py-1 text-xs font-semibold text-accent"
    >
      {children}
    </span>
  )
}

export default Badge
