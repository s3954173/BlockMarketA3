import React from 'react';
import './projectdescription.css';
import Collapsible from 'react-collapsible';
const overview =  <h2 className="projectitem" style={{'font-size':'50px'}}>Overview.</h2>;
const topic =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Topic.</h2>;
const motivation =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Motivation.</h2>;
const landscape =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Landscape.</h2>;

const detaileddescription =  <h2 className="projectitem" style={{'font-size':'50px'}}>Detailed Description.</h2>;
const aims =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Aims.</h2>;
const plansandprogress =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Plans and Progress.</h2>;
const roles =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Roles.</h2>;
const scopesandlimits =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Scopes and Limits.</h2>;
const toolesandtech =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Tools and Technologies.</h2>;
const testing =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Testing.</h2>;

const timeframe =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Time Frame.</h2>;
const risks =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Risks.</h2>;
const groupprocesses =  <h2 className="projectiteminner" style={{'font-size':'40px'}}>Group Processes and Communications.</h2>;
const references =  <h2 className="projectitem" style={{'font-size':'50px'}}>References.</h2>;

const Projectdescription = () => {
  return (
    <div id="projectdescription" className="projectdescription">
      <h1 id="titletext-projectdescription" className="ourproject">Our Project.</h1>
      <h2 id="subtext-projectdescription"className="sectionheading__subtext">Powering your productivity.</h2>
    <div className="projectdescription__text">


      <Collapsible trigger={overview}>
          <Collapsible trigger={topic}>
            <div className='pd-div-content'>
              <p>The project we plan to develop will be a Productivity Software application with the goal to present
a niche solution to the growing productivity software market (currently worth AUD $66.551 billion)
expected to grow 14% per year up to 2030 (Productivity Management Software Market Report,
2030, 2022). To achieve this goal, our project will be developed with the basis of being versatile,
cheap and easy-to-use. Our approach to development will avoid bloated and unnecessary features to
the application’s main objective which is to assist a user with their productivity, time-management
and organisation. Benefits of this approach include reduced resources required and greater
efficiency to project development. For the end-user, the benefit they receive is a simple and intuitive
product which can be quickly picked up and utilised to its full capabilities. Features that are
implemented will feel familiar without the bells and whistles most applications tend to have. We
avoid having these bell and whistle type features so as to not distract and cause detriment to the
user’s experience. The application will serve as an all-in-one package for user productivity on an
individual and team level, avoiding the need for add-on extensions or usage of additional
applications. <br /> <br />
To begin the development of our project, we will first create a wireframe to map out the
application’s layout, user flow, information architecture and behaviours. From here, a prototype in
the form of a full interactive mock-up will be developed, simulating the applications changes,
behaviours, interactions, etc. It presents an opportunity for on-going testing, an understanding and
feel for the UI/UX, plans for changes in the overall design/flow/behaviours, and raise issues
requiring amendment. We will continuously refine the project so that the actual software
development will have a clear goal to achieve. This approach does leave us limited with what we
can test such as the storage of files, the implementation </p>
            </div>
          
          </Collapsible>
          <Collapsible trigger={motivation}>
          <p></p>
          </Collapsible>
          <Collapsible trigger={landscape}>
          <p></p>
          </Collapsible>
      </Collapsible>


      <Collapsible trigger={detaileddescription}>
        <Collapsible trigger={aims}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={plansandprogress}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={roles}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={scopesandlimits}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={toolesandtech}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={testing}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={timeframe}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={risks}>
            <p></p>
            </Collapsible>
            <Collapsible trigger={groupprocesses}>
            <p></p>
            </Collapsible>
      </Collapsible>

      <Collapsible trigger={references}>
      
      </Collapsible>


    </div>
    </div>
  )
}

export default Projectdescription