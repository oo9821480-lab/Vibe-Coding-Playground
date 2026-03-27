import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border p-4 transition-[transform,box-shadow,border-color] duration-300",
        className
      )}
      style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
    >
      {children}
    </div>
  );
}

