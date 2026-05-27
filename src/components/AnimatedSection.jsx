import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

function AnimatedSection({ as: Component = 'div', className, children, ...props }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -80px 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={cn('section-reveal', visivel && 'section-reveal-visible', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default AnimatedSection;
