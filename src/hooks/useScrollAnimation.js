import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (options = {}) => {
  const { triggerOnce = true, threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options
  
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
    rootMargin
  })

  return { ref, inView }
}

export default useScrollAnimation
