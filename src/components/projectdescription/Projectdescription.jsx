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
can test such as the storage of files, the implementation of APIs or the web app deployment process
as these require code and specific tools to be tested. </p>
            </div>
          
          </Collapsible>
          <Collapsible trigger={motivation}>
          <div className='pd-div-content'>
            <p>Our main motivation for this project comes from the potential to enter the rapidly growing
productivity software market. It presents future opportunities to capitalise on the growing success of
the market and thereby becoming successful ourselves. The popularity and success of such apps
stems from how our society has such a focus on our work productivity. Where we are a student or
person in the workforce, we are all working to achieve some form of output. With majority of our
time spent working and focusing on said output, we often find ourselves neglecting to properly
organise our own schedules. Therefore, the option of productivity apps is convenient and perhaps
necessary, especially for individuals finding difficulty to organise by themselves.
The other motivation we have is based up upon our first-hand experiences with currently available
productivity and time-management apps as students. Students have many aspects to manage such as
time-management, note-taking, and project/assignment management. There are a variety of apps
available dedicated to one of these aspects, but the main issue we identified are the lack of apps
designed to fulfil all these requirements together. App choice variety is important and often enjoyed,
but it does become tedious and time-consuming having to switch between apps just to use a specific
function. Synchronising data across the apps is possible, but it is again tedious, time-consuming,
and difficult for most users. Our motivations together aim to resolve these issues so the end-user
can dedicate more time on their work, regardless if our end-user is a student or not. <br /><br />
Though it is not certain we can achieve our ambitious goals, the project will still prove to be a
valuable learning experience for the team. It presents an attempt to mimic a real-world scenario
where we can experiment with different aspects of project development and software development. 
This project will demonstrate to future employers our ability to identify a particular
niche/requirement in a dominated market, how we plan to solve these requirements, and how well
we utilise each team member’s skill-set to cover each other’s strengths and weaknesses. How we
react and adapt to obstacles impeding our progress, how we solve issues and how organised we are
will be other aspects future employers will be looking out for.</p>
            </div>
          </Collapsible>
          <Collapsible trigger={landscape}>
          <div className='pd-div-content'>
            <p>Based upon the “2022-2029 Global Productivity Apps Professional Market Research Report”
synopsis, “Key players in the global Productivity Apps market…” included Evernote, Microsoft To
Do, Headspace, TeamViewer, etc. <br />
(2022-2029 GLOBAL PRODUCTIVITY APPS PROFESSIONAL MARKET RESEARCH REPORT,
ANALYSIS FROM PERSPECTIVE OF SEGMENTATION (COMPETITOR LANDSCAPE, TYPE,
APPLICATION, AND GEOGRAPHY), 2022) <br />
Other similar products to our project also include Microsoft OneNote and Notion primarily for their
note-taking features. From the few that have been identified, these products are not just competitors,
but key players that dominate the market. It is extremely ambitious to believe that our project could
compete directly with these products and companies. Therefore, our project will be capitalising on
the one point of difference that these other applications lack. This niche refers to each apps lack of
variety in their functions to assist with all aspects such as note-taking, productivity, project
management and organisation. By presenting our project as an all-in-one solution, we fulfil a
particular niche in the market. Our chances of success increase and we avoid directly competing
with these existing products.</p>
          </div>
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