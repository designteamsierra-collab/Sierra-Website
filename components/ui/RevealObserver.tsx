"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal observer. Place once in the layout — it watches every
 * .will-reveal element on the page and adds .is-visible when it enters the
 * viewport, triggering the CSS transition defined in globals.css.
 */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    const items = document.querySelectorAll(".will-reveal");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
