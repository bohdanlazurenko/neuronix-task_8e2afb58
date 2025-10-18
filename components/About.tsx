export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 }
  ]

  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Experienced software engineer with a passion for building 
            scalable web applications and solving complex technical challenges.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          {/* Experience Timeline */}
        </div>
      </div>
    </section>
  )
}