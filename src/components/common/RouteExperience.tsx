import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { animate } from "animejs";

/**
 * Keeps route changes feeling deliberate without unmounting the global shell.
 * Browser history restores its own scroll position; new navigations begin at top.
 */
export default function RouteExperience({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    let hashFrame: number | undefined;

    if (navigationType !== "POP") {
      if (hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        hashFrame = window.requestAnimationFrame(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
        });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }

    const node = contentRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.cancelAnimationFrame(hashFrame ?? 0);
    }

    const entrance = animate(node, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 420,
      ease: "out(4)",
    });

    return () => {
      window.cancelAnimationFrame(hashFrame ?? 0);
      entrance.revert();
    };
  }, [hash, navigationType, pathname]);

  return <div ref={contentRef}>{children}</div>;
}
