export default function PestLoading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-4 bg-muted rounded w-48"></div>
        </div>
      </div>

      {/* Progress bar skeleton */}
      <div className="h-1 bg-muted"></div>

      {/* Hero section skeleton */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="h-6 bg-muted rounded w-32"></div>
              <div className="h-12 bg-muted rounded w-full"></div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 bg-muted rounded w-32"></div>
                <div className="h-12 bg-muted rounded w-32"></div>
              </div>
            </div>
            <div className="h-96 bg-muted rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Overview section skeleton */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
        </div>
      </section>

      {/* Content sections skeleton */}
      {[...Array(4)].map((_, i) => (
        <section key={i} className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <div className="h-8 bg-muted rounded w-64 mx-auto"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="space-y-4">
                  <div className="h-6 bg-muted rounded w-full"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}