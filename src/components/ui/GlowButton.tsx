"use client";

export default function GlowButton({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition-[box-shadow,transform] duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_48px_var(--glow)] active:scale-[0.98]"
      style={{
        background: "var(--accent-1)",
        boxShadow: "0 0 32px var(--glow)"
      }}
    >
      {children}
    </button>
  );
}

