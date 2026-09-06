import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function RouteExperience({
  children,
}: {
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    let hashFrame: number | undefined;

    if (navigationType !== "POP") {
      if (hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        hashFrame = window.requestAnimationFrame(() => {
          document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ block: "start" });
        });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }

    const node = contentRef.current;

    if (
      !node ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return () => window.cancelAnimationFrame(hashFrame ?? 0);
    }

    node.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 420,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      },
    );

    return () => {
      window.cancelAnimationFrame(hashFrame ?? 0);
    };
  }, [hash, navigationType, pathname]);

  return <div ref={contentRef}>{children}</div>;
}