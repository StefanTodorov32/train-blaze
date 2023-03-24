import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ height: "calc(100vh - 63px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>TrainBlaze</h1>
      <Link to="/workout-list"><Button variant="primary" size="lg">
        Explore
      </Button></Link>
    </div>
  )
}

export default Home