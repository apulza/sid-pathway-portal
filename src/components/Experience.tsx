
const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Led development of multiple web applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "InnovateSoft",
      period: "2018 - 2021",
      description: "Developed and maintained various client projects using React, Node.js, and MongoDB."
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions",
      period: "2016 - 2018",
      description: "Built responsive interfaces with JavaScript, HTML, and CSS, collaborating closely with designers."
    },
    {
      title: "Junior Developer",
      company: "CodeMasters",
      period: "2014 - 2016",
      description: "Started my journey working on web development projects and learning fundamental programming concepts."
    }
  ];

  return (
    <section id="experience" className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2">Professional Journey</h4>
          <h2 className="max-w-2xl mx-auto">Work Experience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:-ml-px w-[2px] bg-border"></div>
            
            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="mb-12 relative grid md:grid-cols-2 items-center appear-on-scroll"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  marginLeft: index % 2 === 0 ? '0' : 'auto'
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 -ml-4 md:-ml-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className={`md:pr-10 md:text-right ${index % 2 === 1 ? 'md:col-start-1 md:col-end-2' : 'md:col-start-2 md:text-left md:pl-10'}`}>
                  <div className="pl-12 md:pl-0">
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
