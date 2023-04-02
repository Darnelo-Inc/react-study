import { useEffect, useRef } from "react"

const useObserver = (isLoading, ref, canLoad, cb) => {
  const obsRef = useRef()

  useEffect(() => {
    if (isLoading) return
    if (obsRef.current) obsRef.current.disconnect()

    obsRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting & canLoad) {
        cb()
      }
    })

    obsRef.current.observe(ref.current)
  }, [isLoading]) // eslint-disable-line
}

export default useObserver
