import { useEffect, useState, useMemo } from "react"

const useFetcher = (f, q = "") => {
  const [fetchData, setData] = useState("");

  const fetchDataMemo = useMemo(async () => {
    try {
      const r = await f(q);
      setData(r.data);
      return r.data;
    } catch (err) {
      console.log(err)
    }
  }, [f])

  useEffect(() => {
    fetchDataMemo;
  }, [fetchDataMemo])

  return fetchData;
}

export default useFetcher;
