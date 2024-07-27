import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
function AboutPage() {
  return (
    <div>
    <Card>
      ABOUT
      <h2> RATE us --</h2>
      <Link to='/'>GoBackHome</Link>
    </Card>
    </div>
  )
}

export default AboutPage
