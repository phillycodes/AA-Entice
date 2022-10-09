import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/create").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  }, [])


  return (
    <div>
      <p>{data.some}</p>
    </div>
  )
}

export default App