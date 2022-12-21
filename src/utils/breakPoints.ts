import { useResize } from '../hooks/useResize'

interface BreakPointProps {
  sm: boolean
  md: boolean
  lg: boolean
}

export const BreakPoint = (): BreakPointProps => {
  const { width } = useResize()

  const breakPointCondition = {
    sm: width <= 480,
    md: width > 480 && width <= 768,
    lg: width > 768,
  }

  return breakPointCondition
}
