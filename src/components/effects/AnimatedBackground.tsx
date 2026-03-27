export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
      aria-hidden
    >
      <div
        className="mesh-blob-a absolute -left-[20%] -top-[10%] h-[85%] w-[75%] rounded-full opacity-[0.42] blur-[72px]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #5a6dad 0%, #4a5a85 35%, transparent 65%)"
        }}
      />
      <div
        className="mesh-blob-b absolute -right-[15%] top-[20%] h-[70%] w-[70%] rounded-full opacity-[0.38] blur-[64px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #6b6fae 0%, #5c5f8f 38%, transparent 62%)"
        }}
      />
      <div
        className="mesh-blob-c absolute bottom-[-20%] left-[25%] h-[55%] w-[65%] rounded-full opacity-[0.32] blur-[56px]"
        style={{
          background:
            "radial-gradient(circle at 45% 45%, #5d6a9e 0%, #4d5a88 40%, transparent 60%)"
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% 100%, #5b6399 0%, transparent 55%)"
        }}
      />
    </div>
  );
}
