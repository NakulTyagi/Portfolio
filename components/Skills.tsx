'use client'
import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Frontend',
    accent: '#4f9eff',
    skills: ['React', 'Next.js', 'Angular', 'React Native', 'TypeScript', 'Redux', 'HTML5', 'SCSS / CSS3', 'Tailwind', 'Material UI', 'Bootstrap', 'Webpack'],
  },
  {
    label: 'Backend & Cloud',
    accent: '#9b7fff',
    skills: ['Node.js', 'Ruby on Rails', 'Java', 'Python', 'AWS', 'Lambda', 'Firebase', 'MSSQL', 'GraphQL', 'REST APIs', 'Microservices'],
  },
  {
    label: 'Tools, Testing & AI',
    accent: '#00e5cc',
    skills: ['AI Agents', 'Prompt Engineering', 'Docker', 'Kubernetes', 'CI/CD', 'Jest', 'Git', 'Agile / Scrum', 'Lighthouse', 'Chrome DevTools'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#07090f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="section-number text-[5rem] opacity-[0.06]">02</span>
          <div>
            <p className="text-[#4f9eff] text-xs font-bold tracking-[0.18em] uppercase mb-1">Skills</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8edf5]" style={{ letterSpacing: '-0.03em' }}>
              Technologies<br />I work with.
            </h2>
          </div>
        </motion.div>

        <div className="space-y-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#5a6478] mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 cursor-default"
                    style={{
                      color: group.accent,
                      borderColor: `${group.accent}33`,
                      background: `${group.accent}0d`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
