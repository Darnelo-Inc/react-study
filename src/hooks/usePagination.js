import React from "react"

function usePagination(totalPages) {
  const pagesArray = React.useMemo(() => {
    let pagesArray = []
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1)
    }
    return pagesArray
  }, [totalPages])
  return pagesArray
}

export default usePagination
