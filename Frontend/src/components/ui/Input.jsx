// Props: label, value, onChange, onSubmit, and standard input props.
function Input({ label, value, onChange, onSubmit, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-wide text-muted">{label}</span>
      <input
        {...props}
        value={value}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') onSubmit()
        }}
        className="w-full rounded-[var(--radius-control)] border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition duration-200 placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </label>
  )
}

export default Input
