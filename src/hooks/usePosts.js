import React from "react"

function useSortedPosts(posts, sort) {
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      if (sort === "id") {
        return [...posts].sort((a, b) => a.id - b.id)
      } else {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      }
    } else {
      return posts
    }
  }, [posts, sort])

  return sortedPosts
}

function useSearchedPosts(sortedPosts, search) {
  const searchedPosts = React.useMemo(() => {
    return sortedPosts.filter((elem) =>
      elem.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [sortedPosts, search])

  return searchedPosts
}

export { useSortedPosts, useSearchedPosts }
