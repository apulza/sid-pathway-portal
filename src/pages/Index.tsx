
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';

const Index = () => {
  console.log("Index component rendering");
  
  // Update document title
  useEffect(() => {
    document.title = 'Siddharth Patel | Computer Science Student';
    console.log("Document title updated");
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
    </Layout>
  );
};

export default Index;
