import { useEffect, useState } from 'react'
import axios from 'axios'


const UseAxios = (url, initialState = []) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
  }, [])
  return data
  
}
export default UseAxios