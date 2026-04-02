
const Skills = () => {
  // Skills categories
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "C#", "HTML/CSS"]
    },
    {
      category: "Tools & Applications",
      items: ["Git", "GitHub", "Supabase", "PostgreSQL", "MySQL", "AWS", "Figma", "Linux",
              "LaTeX", "VS-Code", "Claude Code", "Cursor", "IntelliJ", "Google Colab", "Jupyter Notebook"]
    }
  ];

  return (
    <section id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2 appear-on-scroll from-bottom">My Expertise</h4>
          <h2 className="max-w-2xl mx-auto appear-on-scroll from-bottom" style={{ transitionDelay: '100ms' }}>
            Technical Skills & Proficiencies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillSet, index) => (
            <div 
              key={skillSet.category}
              className="appear-on-scroll from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-xl p-6 h-full border border-border/50">
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-border/40">
                  {skillSet.category}
                </h3>
                <ul className={skillSet.category === "Tools & Applications" ? "grid grid-cols-2 gap-x-6 gap-y-2" : "space-y-2"}>
                  {skillSet.items.map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
