"use client";

import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), options);

    if (node) observer.current.observe(node);

    return () => observer.current?.disconnect();
  }, [node, options]);

  return [setNode, entry];
};

const AnimatedCounter = ({ target, duration = 2000 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, entry] = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, target, duration]);

  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
