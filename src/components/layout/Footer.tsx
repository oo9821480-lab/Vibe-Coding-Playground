import GlowButton from "@/components/ui/GlowButton";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-border p-6 text-center transition-[border-color,background-color] duration-300">
        <p className="mb-4">Ready to build more vibe?</p>
        <GlowButton>Start Coding</GlowButton>
      </div>
    </footer>
  );
}

