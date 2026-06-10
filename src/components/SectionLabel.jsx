/**
 * Oversized rotated label on the left side of a section — editorial design differentiator.
 * Usage: place inside a `relative overflow-hidden` section wrapper.
 */
export default function SectionLabel({ text, color = 'text-sage-dark/8' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none
        font-body font-black uppercase tracking-widest whitespace-nowrap
        text-[clamp(80px,12vw,160px)] leading-none ${color}
        -rotate-90 origin-left translate-x-[-10%]`}
      style={{ zIndex: 0 }}
    >
      {text}
    </div>
  )
}
