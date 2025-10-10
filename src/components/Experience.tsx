
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Resident Assistant - Engineering LLC",
      company: "Northeastern University Housing and Residential Life",
      location: "Boston, MA",
      period: "Aug 2025 – Present",
      description: [
        "Support a community of 50+ residents, fostering a safe and inclusive living environment through conflict management, policy enforcement, and individualized support.",
        "Planning and facilitating 7+ educational and social programs per semester, leading to a 25% increase in resident engagement and stronger community connections."
      ]
    },
    {
      title: "Coding Instructor",
      company: "theCoderSchool",
      location: "Cheshire, CT",
      period: "Apr 2025 – Aug 2025",
      description: [
        "Instructed 10-15 students a week in programming fundamentals using Python, Java, JavaScript, C#, HTML/CSS, and Scratch.",
        "Developed engaging coding lessons/projects tailored for different skill levels, resulting in positive student feedback scores.",
        "Allowed students to develop problem-solving and critical thinking skills, enabling them to independently debug and approach coding challenges."
      ]
    },
    {
      title: "AI/ML Research Assistant",
      company: "Northeastern University AI Perception Lab",
      location: "Boston, MA",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Worked on semantic segmentation, causal inference, and knowledge graphs to improve object differentiation and contextual understanding.",
        "Developed AI models that incorporate uncertainty estimation and reasoning to handle ambiguity and incomplete information in conversational AI.",
        "Gained hands on experience in AI/ML techniques, including deep learning/neural networks, data preprocessing, regression/classification, and Python."
      ]
    },
    {
      title: "Mathematics Teaching Assistant",
      company: "Northeastern University College of Science",
      location: "Boston, MA",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Provided constructive feedback to 70+ students by grading quizzes/exams to enhance their learning experience in MATH 1341 (Calculus 1 for Science and Engineering).",
        "Fostered a deeper understanding of complex mathematical concepts and improved problem-solving skills by 10%."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-white">
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
                  <div className={
                    index === 2 ? "pl-2 md:pl-0" :
                    index % 2 === 0 ? "pl-8 md:pl-0" : "pr-8 md:pr-0"
                  }>
                    <h3 className="text-xl font-medium whitespace-nowrap">{exp.title}</h3>
                    <p className="text-primary font-medium max-w-md break-words">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    {exp.description && (
                      <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                        {exp.description.map((item, i) => (
                          <li key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
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
