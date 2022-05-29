import React from 'react'
import './tools.css'
import Collapsible from 'react-collapsible';
const teameetingsheading =  <h2 className="toolitem" style={{'font-size':'50px'}}>Team Meetings (Agenda).</h2>;
const projectlinksheading =  <h2 className="toolitem" style={{'font-size':'50px'}}>Team and Project Links.</h2>;
const Tools = () => {
  return (
    <div id="tools" className="tools">
      <h1 id="titletext-tools" className="sectionheading__text">Tools.</h1>
      <h2 id="subtext-tools" className="sectionheading__subtext">Tracking our repository progress &nbsp; //</h2>
    <div className="tools__text">
      <div className="body_div">
      <Collapsible trigger={teameetingsheading} triggerTagName='h2' triggerStyle={{'font-size':'50px','margin-bottom':'2%',}}>
    <h2 className="sectionheading__text" style={{'font-size':'30px'}}>Recording Dates:</h2><br/>
      <p>
        7/5/2022 Agenda Recording Actions <br />
        10/5/2022 Agenda Recording Actions<br />
        15/5/2022 Agenda Recording Actions<br />
        22/5/2022 Agenda Recording Actions<br />
        29/5/2022 Agenda Recording Actions<br />

        
      </p>

      </Collapsible>
      <Collapsible trigger={projectlinksheading} triggerTagName='h2' triggerStyle={{'font-size':'50px','margin-bottom':'2%'}}>
      <h2 className="sectionheading__text" style={{'font-size':'30px', 'margin-top':'2%'}}>Team Website:</h2><br/>
      <a href="https://s3954173.github.io/BlockMarketA3">https://s3954173.github.io/BlockMarketA3</a>
      
      <h2 className="sectionheading__text" style={{'font-size':'30px', 'margin-top':'3%'}}>Team Repository:</h2><br/>
      <a href="https://github.com/s3954173/BlockMarketA3">https://github.com/s3954173/BlockMarketA3</a>

      <h2 className="sectionheading__text" style={{'font-size':'30px', 'margin-top':'3%'}}>Project Prototype:</h2><br/>
      <a href=" https://share.proto.io/Y4KUQL/"> https://share.proto.io/Y4KUQL/</a>

      <h2 className="sectionheading__text" style={{'font-size':'30px', 'margin-top':'3%'}}>Project Wireframe: </h2><br/>
      <a href="https://www.figma.com/file/LW1gv1ds4T2VujkICbnT0M/Block-Market-Wireframe?node-id=0%3A1">https://www.figma.com/file/LW1gv1ds4T2VujkICbnT0M/Block-Market-Wireframe?node-id=0%3A1</a>
      <h2 className="sectionheading__text" style={{'font-size':'30px', 'margin-top':'3%'}}>Project Process flowchart: </h2><br/>
      <a href="https://www.figma.com/file/JDsQbrtl37ZdcLE57IzGgI/Block-Market-Flow-Chart?node-id=0%3A1">https://www.figma.com/file/JDsQbrtl37ZdcLE57IzGgI/Block-Market-Flow-Chart?node-id=0%3A1</a>
      </Collapsible>

      <div className="group_activity_analysis">
        <h2 className="sectionheading__text" style={{'font-size':'40px', }}> Group Activity Analysis </h2><br/>
        <p>
        The audit trail of our Git repository is a fairly accurate representation of our group’s work and progress. With the exception of Hayden, each member of the team has been making commits regularly each week. These commits made it to easy to identify which milestones had been reached, and which members were not completing their tasks. It has also especially made it easier for our project files to be synced and up to date. Compared to our last assignment in which we were using Teams to upload files, it is a big step up and we’ve avoided issues with some documents having out of date information.
        </p>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Tools