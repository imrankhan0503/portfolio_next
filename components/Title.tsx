
export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-3xl font-bold">
      <span className="h-8 w-1.5 rounded bg-accent" />
      {children}
    </h2>
  );
}