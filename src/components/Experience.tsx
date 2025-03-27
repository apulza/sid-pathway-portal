
const Experience = () => {
  const experiences = [
    {
      title: "AI Research Assistant",
      company: "Northeastern University AI Perception Lab",
      location: "Boston, MA",
      period: "Jan 2025 – Present",
      description: [
        "Working on semantic segmentation, causal inference, and knowledge graphs to improve object differentiation and contextual understanding.",
        "Developing AI models that incorporate uncertainty estimation and reasoning to handle ambiguity and incomplete information in conversational AI.",
        "Gaining hands on experience in AI/ML techniques, including deep learning/neural networks, data preprocessing, regression/classification, and Python."
      ]
    },
    {
      title: "Mathematics Teaching Assistant",
      company: "Northeastern University College of Science",
      location: "Boston, MA",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Fostered a deeper understanding of complex mathematical concepts and provided constructive feedback to students to enhance their learning experience in MATH 1341 (Calculus 1 for Science and Engineering)."
      ]
    },
    {
      title: "Cashier and Service Clerk",
      company: "Big Y Foods, Inc.",
      location: "Rocky Hill, CT",
      period: "Aug 2023 – Present",
      description: [
        "Providing excellent customer service, efficiently processing transactions, managing cart retrieval, maintaining a clean and organized workplace, and contributing to a positive and safe shopping experience."
      ]
    },
    {
      title: "AI Scholar",
      company: "Inspirit AI",
      location: "Remote",
      period: "Jul 2023 – Aug 2023",
      description: [
        "Created a computer vision system to help diagnose pneumonia from chest X-rays with a group of interns and mentors.",
        "Reviewed neural networks and created convolutional neural networks in Keras to process medical images.",
        "Evaluated the model on field data, and learned to create artificial data using image transformations so that the model performs well on real-life data."
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
                  <div className="pl-12 md:pl-0">
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <ul className="text-muted-foreground space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
