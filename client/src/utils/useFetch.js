import { useEffect, useState, useMemo } from "react"

const useFetcher = (f) => {
  const [fetchData, setData] = useState("");

  const d = useMemo(async () => {
    try {
      const r = await f();
      setData(r.data);
      return r.data;
    } catch (err) {
      console.log(err)
    }
  }, [fetchData])

  useEffect(() => {
  d;
  }, [d])

}

export default useFetcher;
