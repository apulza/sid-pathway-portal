
import { scrollTo } from '@/utils/animations';
import { useEffect, useState } from 'react';

const Hero = () => {
  const phrases = [
  "Hi, I'm Sid Patel",
  "Innovative",
  "Creative",
  "Passionate",
  "Problem-solver",
  "Detail-oriented"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;
    let timeout: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout | null = null;

    const handleTyping = () => {
      const fullText = phrases[currentPhrase];
      if (!isDeleting && displayedText.length < fullText.length) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        timeout = setTimeout(handleTyping, typingSpeed);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        timeout = setTimeout(handleTyping, typingSpeed);
      } else if (!isDeleting && displayedText.length === fullText.length) {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        timeout = setTimeout(handleTyping, 500);
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);
    cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timeout);
      if (cursorInterval) clearInterval(cursorInterval);
    };
  }, [displayedText, isDeleting, currentPhrase]);
  return (
    <section className="py-10 flex items-start relative">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="appear-on-scroll from-left">
            <h1 className="mb-6">
              <span>{displayedText}</span>
              <span className="inline-block w-2" style={{ color: showCursor ? '#000' : 'transparent' }}>|</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground max-w-lg">
              A passionate computer science student with a concentration in AI, creating innovative solutions and exploring new technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 bg-primary text-white font-medium rounded-lg 
                  shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30
                  transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="px-8 py-3 border border-primary/30 text-primary font-medium rounded-lg
                  hover:bg-primary/5 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="appear-on-scroll from-right">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary/10 rounded-2xl transform rotate-6 -z-10"></div>
              <div className="glass rounded-2xl p-1 shadow-xl">
                <div className="rounded-xl bg-white overflow-hidden w-full h-full">
                  <img
                    src="/siddharth-africa-new.jpg"
                    alt="Siddharth Patel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
