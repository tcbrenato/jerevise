export default function Badge({ label, color = '#4F46E5' }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
      style={{
        background: `${color}22`,
        color: color,
        border: `1px solid ${color}44`
      }}
    >
      {label}
    </span>
  )
}