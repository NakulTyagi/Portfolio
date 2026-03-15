const techs = [
  'React', 'Next.js', 'Angular', 'TypeScript', 'React Native', 'Redux',
  'SCSS', 'Tailwind', 'GraphQL', 'AWS', 'Docker', 'CI/CD',
  'Framer Motion', 'AI Agents', 'Node.js', 'Ruby on Rails', 'Firebase',
]

const Item = ({ tech }: { tech: string }) => (
  <span className="flex items-center gap-3 mx-5 text-text-muted text-sm font-medium tracking-wide whitespace-nowrap">
    <span className="w-1 h-1 rounded-full bg-blue opacity-60 flex-shrink-0" />
    {tech}
  </span>
)

export default function Marquee() {
  const doubled = [...techs, ...techs]

  return (
    <div className="marquee-track relative overflow-hidden border-y py-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Top row — left */}
      <div className="flex mb-2">
        <div className="marquee-inner flex animate-marquee">
          {doubled.map((t, i) => <Item key={`a-${i}`} tech={t} />)}
        </div>
        <div className="marquee-inner flex animate-marquee" aria-hidden>
          {doubled.map((t, i) => <Item key={`b-${i}`} tech={t} />)}
        </div>
      </div>

      {/* Bottom row — right */}
      <div className="flex">
        <div className="marquee-inner flex animate-marquee2">
          {doubled.map((t, i) => <Item key={`c-${i}`} tech={t} />)}
        </div>
        <div className="marquee-inner flex animate-marquee2" aria-hidden>
          {doubled.map((t, i) => <Item key={`d-${i}`} tech={t} />)}
        </div>
      </div>
    </div>
  )
}
