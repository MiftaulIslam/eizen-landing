// Page behaviour runs once per page. Everything it starts is registered here so that
// leaving the page, which does not reload in Next, stops all of it.
export type Scope = ReturnType<typeof createScope>;

export function createScope() {
  const abort = new AbortController();
  const stops: Array<() => void> = [];

  return {
    alive: () => !abort.signal.aborted,
    listen<E extends Event = Event>(
      target: EventTarget,
      type: string,
      handler: (event: E) => void,
      options?: AddEventListenerOptions,
    ) {
      target.addEventListener(type, handler as EventListener, { ...options, signal: abort.signal });
    },
    observer(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
      const observer = new IntersectionObserver(callback, options);
      stops.push(() => observer.disconnect());
      return observer;
    },
    every(handler: () => void, ms: number) {
      const id = setInterval(handler, ms);
      stops.push(() => clearInterval(id));
    },
    onStop(stop: () => void) {
      stops.push(stop);
    },
    stop() {
      abort.abort();
      stops.forEach((stop) => stop());
    },
  };
}

export const $$ = <T extends Element = HTMLElement>(selector: string, scope: ParentNode = document) =>
  [...scope.querySelectorAll<T>(selector)];

export const prefersCalm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
