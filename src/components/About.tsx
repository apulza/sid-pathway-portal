
const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="appear-on-scroll from-left">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-6 -z-10"></div>
              <div className="glass rounded-2xl p-1 shadow-xl">
                <div className="aspect-video rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <div className="text-4xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="appear-on-scroll from-right">
            <h4 className="text-primary font-medium mb-2">About Me</h4>
            <h2 className="section-heading mb-6">Crafting Digital Experiences</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full stack developer with a passion for creating clean, efficient, and user-friendly web applications.
                My journey in tech has equipped me with a strong foundation in both front-end and back-end technologies.
              </p>
              <p>
                I specialize in building responsive web applications with modern JavaScript frameworks, creating RESTful APIs,
                and implementing clean, maintainable code that follows best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
