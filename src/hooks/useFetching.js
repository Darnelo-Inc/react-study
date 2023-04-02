import { useState } from "react"

const useFetching = (cb) => {
  const [info, setInfo] = useState({ isLoading: false, error: "" })

  async function fetching(...args) {
    try {
      setInfo((info) => ({ ...info, isLoading: true }))
      await cb(...args)
    } catch (e) {
      setInfo((info) => ({ ...info, error: e.message }))
    } finally {
      setInfo((info) => ({ ...info, isLoading: false }))
    }
  }

  return [fetching, info.isLoading, info.error]
}

export default useFetching
