
const Projects = () => {
  const projects = [
    {
      title: "Problem Reporting and Solution Tracking App",
      period: "Feb 2025 - Mar 2025",
      description: [
        "Developed an AI-powered community engagement platform in Python that increased resident-leader communication by an estimated 25%, bridging critical gaps in civic participation.",
        "Implemented AI/NLP features (sentiment analysis & keyword extraction) using TensorFlow to analyze hundreds of problem reports, identifying top community concerns with 90%+ accuracy.",
        "Leveraged Retrieval Augmented Generation (RAG) in Streamlit to offer data-driven solutions, potentially reducing resolution time by 15% for common issues."
      ]
    },
    {
      title: "Swarmscape",
      period: "Jan 2025 - Apr 2025",
      description: [
        "Built an AI-powered greenhouse solution using swarm robotics and Google’s Vertex AI to address 29% global food scarcity due to climate change.",
        "Engineered a dual-robot system (Raspberry Pi 4 & Pololu 3pi+) for 24/7 autonomous environmental monitoring, capturing numerous plant images and sensor data.",
        "Implemented Python-based AI models on Google Vertex AI for real-time analysis, enabling autonomous decision-making on pest control, disease management, and crop yield.",
        "Projected to increase harvesting efficiency by 15-20% and boost crop output by up to 30%, significantly enhancing farming sustainability."
      ]
    },
    {
      title: "Cryptocurrency Analysis",
      period: "Sep 2025 - Dec 2025",
      description: [
        "Analyzed cryptocurrency price volatility across 3,376 coins using market capitalization and trading volume data from the CoinMarketCap API.",
        "Built and evaluated regression-based ML models (linear, polynomial, interaction terms) using NumPy and scikit-learn to assess predictability of crypto volatility.",
        "Found that market fundamentals explain <2.4% of volatility, demonstrating that crypto price movement is largely driven by sentiment, news, and speculation rather than traditional metrics.",
        "Produced a full end-to-end data science pipeline including data collection, cleaning, visualization, modeling, and statistical evaluation."
      ]
    },
    {
      title: "NFL Injury Database",
      period: "Nov 2025 - Dec 2025",
      description: [
        "Built a comprehensive MySQL database analyzing 3,440+ NFL injury reports across the 2024 regular season, integrating weekly injury data, player rosters, team performance, and game outcomes to uncover injury trends and performance impacts.",
        "Designed a scalable relational schema (players, teams, games, injuries) supporting mid-season trades and multi-season expansion, with strict foreign key constraints and composite keys.",
        "Developed automated data pipelines using Google Apps Script (web scraping) and Java for data cleaning, ID mapping, and SQL generation.",
        "Discovered key insights including a negative correlation between team injuries and wins, high injury rates among wide receivers and cornerbacks, and lower-body injuries accounting for ~30% of all cases."
      ]
    }
  ];

  return (
  <section id="projects" className="py-10">
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
                  <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
