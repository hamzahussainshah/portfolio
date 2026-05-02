import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-none tracking-[-0.04em]">
        Page not found
      </h1>
      <p className="max-w-md text-base leading-[1.7] text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
      >
        ← Back home
      </Link>
    </main>
  );
}
