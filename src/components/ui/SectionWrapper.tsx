export default function SectionWrapper({ id, children }: { id?: string; children: React.ReactNode }) { return <section id={id} className="mx-auto max-w-6xl px-6 py-16">{children}</section>; }
