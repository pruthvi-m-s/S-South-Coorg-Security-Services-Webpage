import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/content";

interface ResponseTimePromiseProps {
  className?: string;
}

export default function ResponseTimePromise({
  className,
}: ResponseTimePromiseProps) {
  const responseTime =
    CONTACT.responseTime.trim();

  if (!responseTime) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-[#6a655e]",
        className,
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-[#ad241c]/10 text-[#ad241c]">
        <Clock
          size={15}
          aria-hidden="true"
        />
      </span>

      <span>{responseTime}</span>
    </div>
  );
}