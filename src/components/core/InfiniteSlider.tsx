import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from "react";

interface InfiniteSliderProps {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  direction = "horizontal",
  reverse = false,
  speed = 40,
  speedOnHover,
  gap = 24,
  className = "",
}: InfiniteSliderProps) {
  const items = Children.toArray(children);

  const renderGroup = (groupIndex: number) => (
    <div
      className="infinite-slider-group"
      aria-hidden={groupIndex === 1}
    >
      {items.map((child, index) =>
        isValidElement(child)
          ? cloneElement(child, {
              key: `${groupIndex}-${child.key ?? index}`,
            })
          : child,
      )}
    </div>
  );

  const style = {
    "--infinite-speed": `${speed}s`,
    "--infinite-hover-speed": `${speedOnHover ?? speed}s`,
    "--infinite-gap": `${gap}px`,
  } as CSSProperties;

  return (
    <div
      className={[
        "infinite-slider",
        direction === "vertical" ? "infinite-slider-vertical" : "",
        reverse ? "infinite-slider-reverse" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <div className="infinite-slider-track">
        {renderGroup(0)}
        {renderGroup(1)}
      </div>
    </div>
  );
}