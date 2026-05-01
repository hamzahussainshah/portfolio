export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] bg-bg-2 px-6 py-7 text-center font-mono text-xs text-muted md:flex-row md:px-12 md:text-left">
      <p>© {new Date().getFullYear()} Hamza Hussain Shah</p>
      <p>Flutter &amp; React Developer · Pakistan</p>
    </footer>
  );
}
