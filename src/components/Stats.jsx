import React, { useEffect, useRef, useState } from "react";

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export default function Stats() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const count1 = useCountUp(100000, 1500, startCount); // 1.5 seconds
  const count2 = useCountUp(3500, 1500, startCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 mt-6 bg-accent text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-8">
          Let our numbers do the talking!
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:flex md:justify-around">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold">
              {count1.toLocaleString()}+
            </div>
            <div className="mt-2 text-sm md:text-base">#LivspaceHomes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold">
              {count2.toLocaleString()}+
            </div>
            <div className="mt-2 text-sm md:text-base">designers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

