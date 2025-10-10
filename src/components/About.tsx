
const About = () => {
  return (
  <section id="about" className="bg-secondary/50 py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="appear-on-scroll from-left">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-6 -z-10"></div>
              <div className="glass rounded-2xl p-1 shadow-xl">
                <div className="rounded-xl bg-white overflow-hidden">
                  <img
                    src="/sidcruisepic.png" 
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="appear-on-scroll from-right">
            <h4 className="text-primary font-medium mb-2">About Me</h4>
            <h2 className="section-heading mb-6">Computer Science Student</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Computer Science student at Northeastern University's Khoury College of Computer Sciences,
                with a concentration in Artificial Intelligence and a minor in Business Administration.
              </p>
              <p>
                My academic journey has provided me with strong foundations in various programming languages
                and technologies, from Java and Python to AI/ML concepts and web development.
              </p>
              <p>
                I'm passionate about applying AI to solve real-world problems, as demonstrated by my research
                experience at Northeastern's AI Perception Lab and through my various projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
