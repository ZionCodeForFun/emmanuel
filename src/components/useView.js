import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect if an element is in viewport
 * @param {IntersectionObserverInit} options
 * @returns {[ref, isInView]} - tuple of ref and boolean
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  // Return as tuple for simpler destructuring
  return [ref, isInView];
}