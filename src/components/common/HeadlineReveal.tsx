import { motion } from "framer-motion";

interface HeadlineRevealProps {
  children: string;
  as?: "h1" | "h2";
  className?: string;
  delay?: number;
}

export default function HeadlineReveal({
  children,
  as = "h1",
  className,
  delay = 0,
}: HeadlineRevealProps) {
  const Tag = as;

  const lines = children.split("\n");

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="block overflow-hidden"
        >
          <motion.span
            initial={{ opacity: 0, y: "110%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: delay + index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}