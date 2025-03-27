
import { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Code, 
  Laptop, 
  Terminal, 
  FileCode, 
  Database, 
  Github, 
  Infinity, 
  Layout, 
  SquareCode,
  Book,
  Brackets,
  Braces,
  FileJson,
  CircleDot,
  Server,
  MonitorSmartphone
} from "lucide-react";
import { initScrollAnimations } from '@/utils/animations';

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Categories with icons
  const skillsWithIcons = [
    {
      name: "Java",
      icon: <FileCode className="h-10 w-10" />
    },
    {
      name: "JavaScript",
      icon: <FileJson className="h-10 w-10" />
    },
    {
      name: "Python",
      icon: <Code className="h-10 w-10" />
    },
    {
      name: "C",
      icon: <Terminal className="h-10 w-10" />
    },
    {
      name: "C++",
      icon: <Braces className="h-10 w-10" />
    },
    {
      name: "HTML/CSS",
      icon: <Layout className="h-10 w-10" />
    },
    {
      name: "SQL",
      icon: <Database className="h-10 w-10" />
    },
    {
      name: "Racket",
      icon: <Brackets className="h-10 w-10" />
    },
    {
      name: "Git",
      icon: <Infinity className="h-10 w-10" />
    },
    {
      name: "GitHub",
      icon: <Github className="h-10 w-10" />
    },
    {
      name: "Google Colab",
      icon: <SquareCode className="h-10 w-10" />
    },
    {
      name: "Jupyter Notebook",
      icon: <Book className="h-10 w-10" />
    },
    {
      name: "IntelliJ",
      icon: <Laptop className="h-10 w-10" />
    },
    {
      name: "Eclipse",
      icon: <CircleDot className="h-10 w-10" />
    },
    {
      name: "VS-Code",
      icon: <Server className="h-10 w-10" />
    },
    {
      name: "Linux",
      icon: <Terminal className="h-10 w-10" />
    },
    {
      name: "LaTeX",
      icon: <MonitorSmartphone className="h-10 w-10" />
    }
  ];
  
  // Skills categories
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "Python", "C", "C++", "HTML/CSS", "SQL", "Racket"]
    },
    {
      category: "Tools & Applications",
      items: ["Git", "Github", "Google Colab", "Jupyter Notebook", "IntelliJ", "Eclipse", "VS-Code", "Linux", "LaTeX"]
    }
  ];

  useEffect(() => {
    // Set up auto-scrolling effect for the carousel
    const startAutoScroll = () => {
      if (!carouselRef.current) return;

      const scrollAmount = 1; // pixels per animation frame
      const scrollContainer = carouselRef.current;
      let scrollPosition = 0;
      
      const scroll = () => {
        if (!scrollContainer) return;
        
        scrollPosition += scrollAmount;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // If we reached the end, loop back to start
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
        requestAnimationFrame(scroll);
      };
      
      const animationId = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationId);
    };

    const cleanup = startAutoScroll();
    const animationsCleanup = initScrollAnimations();

    return () => {
      cleanup && cleanup();
      animationsCleanup();
    };
  }, []);

  return (
    <section id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2 appear-on-scroll from-bottom">My Expertise</h4>
          <h2 className="max-w-2xl mx-auto appear-on-scroll from-bottom" style={{ transitionDelay: '100ms' }}>
            Technical Skills & Proficiencies
          </h2>
        </div>
        
        <div 
          className="appear-on-scroll from-bottom relative overflow-hidden py-4"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden gap-6 py-4"
          >
            {/* Duplicate items to create seamless loop effect */}
            {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-none"
              >
                <div className="bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl p-6 border border-border/50 w-[140px] h-[140px] flex flex-col items-center justify-center">
                  <div className="text-primary mb-3">
                    {skill.icon}
                  </div>
                  <span className="text-center font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Category breakdown */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
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
                <ul className="space-y-2">
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
