
const Projects = () => {
  const projects = [
    {
      title: "Problem Reporting and Solution Tracking App",
      period: "Feb 2025 - March 2025",
      description: "Developed an AI-powered community-engagement platform designed to bridge the gap between residents and community leaders. The platform leverages AI from sentiment analysis to keyword extraction, and offers data-driven insights based on retrieval augmented generation (RAG)."
    },
    {
      title: "Swarmscape",
      period: "Jan 2025 - Apr 2025",
      description: "Developed an AI-powered greenhouse using swarm robotics and Google's Vertex AI. The robots record data around the greenhouse using sensors and monitor the environment 24/7. AI is used to analyze the environmental data gathered by the robots to make decisions related to pest control, diseases, and crop yield."
    }
  ];

  return (
    <section id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2 appear-on-scroll from-bottom">My Work</h4>
          <h2 className="max-w-2xl mx-auto appear-on-scroll from-bottom" style={{ transitionDelay: '100ms' }}>
            Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="appear-on-scroll from-bottom"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl p-6 h-full border border-border/50">
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm text-primary mb-3">{project.period}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
