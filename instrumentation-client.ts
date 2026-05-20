/**
 * Dev-only guard for a known Next.js / React issue where performance.measure()
 * throws when a route render is interrupted (e.g. fast refresh).
 * @see https://github.com/vercel/next.js/issues/86060
 */
export function register() {
  if (process.env.NODE_ENV !== "development") return;

  const measure = performance.measure.bind(performance);
  performance.measure = ((...args: Parameters<Performance["measure"]>) => {
    try {
      return measure(...args);
    } catch (error) {
      if (
        error instanceof TypeError &&
        String(error.message).includes("cannot have a negative time stamp")
      ) {
        return undefined;
      }
      throw error;
    }
  }) as Performance["measure"];
}
