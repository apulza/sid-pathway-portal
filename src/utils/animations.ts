
/**
 * Utility for animating elements on scroll
 */
export const initScrollAnimations = () => {
  const elements = document.querySelectorAll('.appear-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // 10% of the item visible
    rootMargin: '0px 0px -50px 0px' // trigger a bit before the element enters
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

/**
 * Smooth scroll to an element
 */
export const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
