
import { Bicycle, Golf, TennisBall, Dumbbell, Plane, Gamepad2 } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      name: "Hiking",
      icon: <Bicycle className="h-6 w-6" />
    },
    {
      name: "Golf",
      icon: <Golf className="h-6 w-6" />
    },
    {
      name: "Tennis",
      icon: <TennisBall className="h-6 w-6" />
    },
    {
      name: "Fitness",
      icon: <Dumbbell className="h-6 w-6" />
    },
    {
      name: "Traveling",
      icon: <Plane className="h-6 w-6" />
    },
    {
      name: "Video Games",
      icon: <Gamepad2 className="h-6 w-6" />
    }
  ];

  return (
    <section id="interests" className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2 appear-on-scroll from-bottom">Beyond Tech</h4>
          <h2 className="max-w-2xl mx-auto appear-on-scroll from-bottom" style={{ transitionDelay: '100ms' }}>
            Interests & Hobbies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="appear-on-scroll from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl p-6 h-full border border-border/50 flex flex-col items-center text-center">
                <div className="text-primary mb-3">
                  {interest.icon}
                </div>
                <h3 className="font-medium">{interest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
