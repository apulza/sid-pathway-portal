
import { scrollTo } from '@/utils/animations';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="appear-on-scroll from-left">
            <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Full Stack Developer
            </div>
            <h1 className="mb-6">
              Hi, I'm Siddharth Patel
            </h1>
            <p className="mb-8 text-lg text-muted-foreground max-w-lg">
              A passionate developer creating elegant and functional web experiences with modern technologies.
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
                <div className="aspect-square rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">👨‍💻</div>
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
