import React from "react"

const useObserver = (ref, cb, isLoading, canLoad) => {
  const observer = React.useRef()

  React.useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    let callback = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        cb()
      }
    }

    observer.current = new IntersectionObserver(callback)
    observer.current.observe(ref.current)
  }, [isLoading]) // eslint-disable-line
}

export default useObserver
