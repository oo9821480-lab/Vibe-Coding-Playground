import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#animations", label: "Animations" },
  { href: "#interactivity", label: "Interactivity" },
  { href: "#effects", label: "Effects" },
  { href: "#responsive", label: "Responsive" }
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur transition-[background-color,backdrop-filter,border-color] duration-300">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a
          href="#hero"
          className="font-semibold text-text transition-colors duration-300 hover:text-muted"
        >
          Vibe Coding Playground
        </a>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-2 py-1 text-sm text-muted transition-colors duration-300 hover:bg-surface hover:text-text sm:px-3"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
