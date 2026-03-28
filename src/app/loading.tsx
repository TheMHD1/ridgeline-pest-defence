export const metadata = {
  robots: { index: false, follow: false }
};

export default function Loading() {
  return (
    <>
    <div className="sr-only" role="status" aria-live="polite">Loading page content...</div>
    <div className="min-h-screen bg-background animate-pulse" aria-hidden="true">
      {/* Header placeholder */}
      <div className="h-16 bg-muted/40 w-full" />
      {/* Hero placeholder */}
      <div className="h-96 bg-muted/30 w-full" />
      {/* Content blocks */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="h-8 bg-muted/40 rounded w-1/3" />
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-muted/40 rounded-xl" />
          ))}
        </div>
        <div className="h-6 bg-muted/40 rounded w-2/3" />
        <div className="h-6 bg-muted/40 rounded w-1/2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-32 bg-muted/40 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
