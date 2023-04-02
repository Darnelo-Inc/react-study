import { useMemo } from "react"

export function useSortPosts(posts, sort) {
  const sortPosts = useMemo(() => {
    if (sort && sort !== "id") {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    } else {
      return posts
    }
  }, [posts, sort])

  return sortPosts
}

export function useSearchPosts(sortPosts, search) {
  const searchPosts = useMemo(() => {
    return [...sortPosts].filter(
      (elem) =>
        elem.title.toLowerCase().includes(search.toLowerCase()) ||
        elem.body.toLowerCase().includes(search.toLowerCase())
    )
  }, [sortPosts, search])

  return searchPosts
}
