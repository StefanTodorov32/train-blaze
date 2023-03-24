import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1>TrainBlaze</h1>
      <Link to="/workout-list"><Button variant="primary" size="lg">
        Explore
      </Button></Link>
    </div>
  )
}

export default Home