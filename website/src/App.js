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
        <section>
        <Teamprofile />

        </section>
        <section>
        <Tools />

        </section>
        <section>
        <Skills />

        </section>
        <section>
        <Projectdescription />

        </section>
        <section>
        <Feedback />

        </section>
        

        
    </div>
  )
}

export default App