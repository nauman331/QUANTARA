import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void,
    eventType: 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' = 'mousedown',
    excludeRefs: RefObject<HTMLElement>[] = []
): void {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref.current;
            const target = event.target as Node;

            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(target)) {
                return;
            }

            // Check if clicking on excluded elements
            const isExcluded = excludeRefs.some(
                excludeRef => excludeRef.current && excludeRef.current.contains(target)
            );

            if (isExcluded) {
                return;
            }

            handler(event);
        };

        document.addEventListener(eventType, listener);

        return () => {
            document.removeEventListener(eventType, listener);
        };
    }, [ref, handler, eventType, excludeRefs]);
}
