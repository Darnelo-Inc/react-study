const getPagesCount = (postsTotal, limit) => {
  return Math.ceil(postsTotal / limit)
}

export default getPagesCount
