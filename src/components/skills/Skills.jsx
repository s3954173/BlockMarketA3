import React from 'react'
import './skills.css'
import Collapsible from 'react-collapsible';
const softwareengineer =  <h2 className="skillitem" style={{'font-size':'50px'}}>Software Engineer.</h2>;
const advertisingspecialist =  <h2 className="skillitem" style={{'font-size':'50px'}}>Advertising Specialist</h2>;
const uxdesigner =  <h2 className="skillitem" style={{'font-size':'50px'}}>UX / UI Designer</h2>;
const projectmanager =  <h2 className="skillitem" style={{'font-size':'50px'}}>Project Manager</h2>;

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 id="titletext-skills" className="sectionheading__text">Skills.</h1>
      <h2  style={{'font-size':'50px'}}>What talent do we need for our project?</h2>
      <h2  style={{'font-size':'30px'}}>Click on our roles to find out more.</h2>
      <div className="skills__text">
    
      </div>

      <div style={{'padding-bottom':'5%','margin-left':'5%'}}>
      <Collapsible trigger={softwareengineer} triggerTagName='h2' triggerStyle={{'font-size':'70px','margin-bottom':'2%'}}>
      <p style={{'padding':'3%', 'background':'#68f9ba', 'border-radius':'15px', 'margin-top':'2%', 'margin-bottom':'1%'}}>
      BlockMarket is a wonderful, easy-to-use productivity platform that helps a range of customers from individuals to industry leading companies grow and thrive.  

 

At BlockMarket, our purpose is to make life as easy as possible through organization. This purpose sits at the center of everything we do. We support our people to do the best work of their lives so that they can thrive for their goals.  

 <br /><br />

 <b>About the role:  </b> 

<br />
 

As a software engineer, you will be responsible for actively contributing to the design and development of an intuitive and responsive user face that is smooth and eye-catching.  

 
<br /><br />

You will be working with colleagues to build, develop and deploy effective and efficient code. Working closely with the development team to ensure that projects are delivered correctly and on time, including: 

design, build and maintain applications/tools to increase application efficiency 

collaborate with team members and key stakeholders to gather deep insights about the challenges and opportunities to improve our software application 

significantly contribute to continuous improvement initiatives of our systems and processes, to help define best practice testing standards and drive improved outcomes 

  
 <br /><br />

 <b>Minimum Qualification:</b>  
 <br />

Bachelor’s degree in Computer science or Software engineering, or equivalent  

2 years of experience as a software engineer  

You’re proficient with any part of your technology stack: React, Node.js, Typescript, PHP, Bootstrap SQLite. 

Willingness to jump divisions - e.g. front-end to back-end 

<br /><br />
 

<b>Preferred Qualification:</b>
 <br />

Master’s or PhD in Computer Science  

You have experience debugging performance issues in modern browsers across multiple platforms. 

Ability to ship high quality, well tested software through automation, proven best practices and appropriate design patterns 

In depth knowledge about modern frameworks - front end and back end 

A growth mindset to actively seek learning opportunities and strive for continuous improvement  

 
<br /><br />

 <b>Why BlockMarket? </b>


 <br />

 


At BlockMarket, we support many types of flexible working arrangements that allow you to balance your work, your life and your passions. We offer a great remuneration package including performance bonuses and a range of leave options to suit your well-being. Our work environment encourages continuous improvement and career development and you’ll get to work with the latest technology. 

 
<br /><br />

We have a collaborative and inclusive and collaborative culture that we are exceptionally proud of. Having a diverse workforce is a strength that enables businesses, including BlockMarket, to provide the best to our customers and to attract the top talent to help us succeed. So, from the moment you step through our doors, you’ll feel welcome and supported to thrive for the best work of your life.  

 
      </p>
    </Collapsible>

    <Collapsible trigger={advertisingspecialist} triggerTagName='h2' triggerStyle={{'font-size':'70px','margin-bottom':'2%'}}>
    <p style={{'padding':'3%', 'background':'#68f9ba', 'border-radius':'15px', 'margin-top':'2%', 'margin-bottom':'1%'}}>
    Block Market is a start-up creating a productivity app for the masses, our goal is to allow work to be organised by individuals or companies in a way that is intuitive and easy to understand, yet very powerful and capable of assisting those who use it in making the most out of their work.
<br /><br /> <b></b>
<b>About the position:</b>
<br />
We are looking for a project manager to lead our team to ensure that this project can become realised to its full potential, this means overseeing the progress of the creation of our application to ensure that it is running promptly and without straying too far away from the resources at our disposal.
<br /><br />
<b>Roles & Responsibilities:</b>
 <br />
•	Managing a team, of developers, designers, and programmers to ensure the project remains on track<br />
•	Anticipate potential problems and come up with contingencies to work around them<br />
•	Maintain positive, professional relations with stakeholders and set correct expectations<br />
•	Identifying risks and managing them to ensure the project moves along smoothly<br />
•	Monitor the progress of the project to ensure consistent headway is made<br />
<br />
<b>Requirements:</b>
 <br />
•	At least 4 years of experience working as a project manager.<br />
•	Good commutation skills; must be able to direct and communicate information to multiple departments effectively.<br />
•	Technical literacy in languages like HTML, JavaScript, SQL<br />
•	Experience managing projects involving IT<br />
•	Ability to take charge of the situation<br />
•	Resilience against potential problems and setbacks<br />
•	Organisational skills and detail-orientated<br />
<br />
<b>Why choose BlockMarket?</b><br />
Here at BlockMarket, we like to practice what we preach and make sure each employee is reaching their full potential, and we believe the best way to achieve this is by creating a positive workspace for everyone, this means a healthy work-life balance, working from home opportunities, and an overall supportive environment. We also want to make sure that all of our staff grow and develop their skills while they’re employed here.
<br />


      </p>
    </Collapsible>

    <Collapsible trigger={uxdesigner}triggerTagName='h2' triggerStyle={{'font-size':'70px','margin-bottom':'2%'}}>
    <p style={{'padding':'3%', 'background':'#68f9ba', 'border-radius':'15px', 'margin-top':'2%', 'margin-bottom':'1%'}}>
    BlockMarket is the next big thing in the space of project and productivity management applications. Our organization aims to help businesses and individuals visualize objectives in an easy to use, easy to understand manner. We are always incorporating innovation in our business; from new features to contemporary designs to meet current market demands.
<br /><br /> 
<b>The position:</b>
<br />
We are looking to expand our product to a website platform and are looking for talented UI/UX Designers to help with our product design. Your role will be to is to deliver the user experience of our web product to the customers. You will be utilizing standard practices in UI/UX in developing wireframes, mock-ups, and user stories in developing the website. You will be working together with internal and external stakeholders in meeting business objectives.
<br /><br />
<b>As a UX Designer, you will:</b>
<br />
•	Work with different stakeholders including Product managers, marketing, and engineers<br />
•	Develop wireframes, prototypes, and mock-ups to visualize our product<br />
•	Develop well-written, in-depth user stories<br />
•	Adhere to Agile framework in designing the UX and UI<br />
•	Strong communication skills when presenting to stakeholders<br />
•	Learn and apply the best design practices from up-and-coming design developments<br />
•	Iterate through design models based on customer feedback in an Agile manner<br />
<br />
<b>Skills and Experience:</b>
<br />
•	Have a degree in Design or related field<br />
•	Previous Experience in UX/UI Design, desirably with web applications<br />
•	Proficient in Figma or other online collaborative design tools<br />
•	Have an understanding of CSS, HTML and Javascript<br />
•	Ability to interpret business needs to design outcomes<br />
•	Strong communication skills and proven ability to collaborate with internal and external stakeholders<br />
•	Understanding of User-experience, desirably with web applications<br />
•	Understanding of working with the Agile framework<br />
•	A proven track record of knowledge on Usability testing<br />
<br />
<b>Why choose BlockMarket?</b>
<br />
We are a small, but growing team that strives to develop an environment where everyone feels valued, comfortable, and respected regardless of their background. We have a great work-life balance orientated approach to management where we put our employees first. We also offer work-from-home arrangements as well as career development opportunities.
<br />
      </p>
    </Collapsible>

    <Collapsible trigger={projectmanager} triggerTagName='h2' triggerStyle={{'font-size':'70px','margin-bottom':'2%'}}>
    <p style={{'padding':'3%', 'background':'#68f9ba', 'border-radius':'15px', 'margin-top':'2%', 'margin-bottom':'1%'}}>
    Block Market is a start-up creating a productivity app for the masses, our goal is to allow work to be organised by individuals or companies in a way that is intuitive and easy to understand, yet very powerful and capable of assisting those who use it in making the most out of their work.
<br /><br />
<b>About the position:</b>
 <br />

We are looking for a project manager to lead our team to ensure that this project can become realised to its full potential, this means overseeing the progress of the creation of our application to ensure that it is running promptly and without straying too far away from the resources at our disposal.
<br /><br />
<b>Roles & Responsibilities: </b>
<br />
•	Managing a team, of developers, designers, and programmers to ensure the project remains on track<br />
•	Anticipate potential problems and come up with contingencies to work around them<br />
•	Maintain positive, professional relations with stakeholders and set correct expectations<br />
•	Identifying risks and managing them to ensure the project moves along smoothly<br />
•	Monitor the progress of the project to ensure consistent headway is made<br /><br />
<b>Requirements:</b>
<br />
•	At least 4 years of experience working as a project manager.<br />
•	Good commutation skills; must be able to direct and communicate information to multiple departments effectively.<br />
•	Technical literacy in languages like HTML, JavaScript, SQL<br />
•	Experience managing projects involving IT<br />
•	Ability to take charge of the situation<br />
•	Resilience against potential problems and setbacks<br />
•	Organisational skills and detail-orientated<br /><br />
<b>Why choose BlockMarket?</b>
<br />
Here at BlockMarket, we like to practice what we preach and make sure each employee is reaching their full potential, and we believe the best way to achieve this is by creating a positive workspace for everyone, this means a healthy work-life balance, working from home opportunities, and an overall supportive environment. We also want to make sure that all of our staff grow and develop their skills while they’re employed here.
<br />
      </p>
    </Collapsible>
      </div>
    </div>
   

  )
}

export default Skills