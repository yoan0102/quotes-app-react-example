import { useEffect, useState } from "react"
import "./App.css"
import { Card } from "./components/Card"

function App() {
  const [quote, setQuote] = useState({
    id: 0,
    advice: "",
  })
  const [loading, setLoading] = useState(true)

  const getAdvice = async () => {
    setLoading(true)
    const resp = await fetch("https://api.adviceslip.com/advice")
    const data = await resp.json()
    setQuote(data?.slip)
    setLoading(false)
  }
  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className='wrapper'>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <Card quote={quote} getAdvice={getAdvice} />
      )}
    </div>
  )
}

export default App
