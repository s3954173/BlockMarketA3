import React from 'react'
import { Header} from './containers';
import { Feedback, Navbar, Projectdescription, Skills, Teamprofile, Tools} from './components'
import './app.css'

const App = () => {
  return (
    <div className ="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />

        </div>
        <Teamprofile />
        <Tools />
        <Skills />
        <Projectdescription />
        <Feedback />

        
    </div>
  )
}

export default App