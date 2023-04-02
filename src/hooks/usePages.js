import { useMemo } from "react"

const usePages = (totalPages) => {
  const getArray = useMemo(() => {
    let pages = []
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1)
    }
    return pages
  }, [totalPages])

  return getArray
}

export default usePages
