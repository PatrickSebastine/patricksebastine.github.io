import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function useCountUp(endValue, duration = 2000) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const countRef = useRef(0)
  const countDisplay = useRef(0)

  useEffect(() => {
    if (!inView) return

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      countDisplay.current = Math.floor(progress * endValue)
      countRef.current = countDisplay.current

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [inView, endValue, duration])

  return { ref, count: countDisplay.current }
}