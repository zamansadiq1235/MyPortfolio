import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches IntersectionObserver to a ref.
 * Adds .visible class when element enters viewport.
 * The element must also have the .reveal CSS class.
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
