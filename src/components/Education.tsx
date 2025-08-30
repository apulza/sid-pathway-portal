
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2 appear-on-scroll from-bottom">My Academic Background</h4>
          <h2 className="max-w-2xl mx-auto appear-on-scroll from-bottom" style={{ transitionDelay: '100ms' }}>
            Education
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto appear-on-scroll from-bottom" style={{ transitionDelay: '200ms' }}>
          <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-xl p-8 border border-border/50">
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium">Northeastern University - Khoury College of Computer Sciences</h3>
                <p className="text-primary font-medium">B.S. in Computer Science, Concentration in AI, Minor in Business Administration</p>
                <p className="text-sm text-muted-foreground mb-4">May 2024 – Present</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 >
                      <span ></span>
                      
                    </h4>
                  </div>
                  
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Courses
                    </h4>
                    <p className="ml-4 text-muted-foreground">
                    Discrete Structures, Foundations of Computer Science 1 and 2, Foundations of Cybersecurity, Foundations
                    of Data Science, Introduction to Databases, Object Oriented Design, Programming in C++, Theory of Computation
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Activities and Societies
                    </h4>
                    <p className="ml-4 text-muted-foreground">
                      Northeastern AI Club, InnovAIte Hackathon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
