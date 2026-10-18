// Props: children, variant, className, and standard button props.
function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-accent text-bg hover:bg-[image:var(--accent-gradient)] focus-visible:ring-accent',
    danger: 'border-danger/70 bg-danger/10 text-text hover:bg-danger/20 focus-visible:ring-danger',
    ghost: 'border-border bg-transparent text-muted hover:border-accent hover:text-text focus-visible:ring-accent',
  }

  return (
    <button
      className={`rounded-[var(--radius-control)] border border-transparent px-4 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
