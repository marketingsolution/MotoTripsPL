// Step 1: Import React
import * as React from 'react'
import Header from '../components/header'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Moto Trips</title>
      <div className="row">
        <h1 className="title">Moto Trips</h1>
        <p>Użyj wyszukiwarki</p>
        <Header txt="this is the"/>
      </div>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage