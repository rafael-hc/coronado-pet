import { useEffect, useState } from 'react'

interface SizeProps {
  width: number
  height: number
}

export const useResize = (): SizeProps => {
  const [size, setSize] = useState({} as SizeProps)

  const changeSize = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    setSize({ width, height })
  }

  useEffect(() => {
    changeSize()

    window.addEventListener('resize', changeSize)
  }, [])

  return size
}
