import React from 'react';
import './teamprofile.css';
import boselfie from '../../assets/imgs/boselfie.png';
import bodog from '../../assets/imgs/bodog.png';
import bomyerbriggs from '../../assets/imgs/bomyerbriggs.png';
import bolearningstyle from '../../assets/imgs/bolearningstyle.png';
import bobig5 from '../../assets/imgs/bobig5.png';
import danielselfie from '../../assets/imgs/danielselfie.png';
import danielmyerbriggs from '../../assets/imgs/danielmyerbriggs.png';
import daniellearningstyle from '../../assets/imgs/daniellearningstyle.png';
import danielcreativity from '../../assets/imgs/danielcreativity.png';
import vanselfie from '../../assets/imgs/vanselfie.png';
import vanmyerbriggs from '../../assets/imgs/vanmyerbriggs.png';
import vanlearningstyle from '../../assets/imgs/vanlearningstyle.png';
import vanbig5 from '../../assets/imgs/vanbig5.png';
import russellselfie from '../../assets/imgs/russellselfie.png';
import russellmyerbriggs from '../../assets/imgs/russellmyerbriggs.png';
import russellbig5 from '../../assets/imgs/russellbig5.png';
import russellvark from '../../assets/imgs/russellvark.png';
import haydenselfie from '../../assets/imgs/haydenselfie.png';
import haydenmyerbriggs from '../../assets/imgs/haydenmyerbriggs.png';
import haydenbig5 from '../../assets/imgs/haydenbig5.png';
import haydenlearningstyle from '../../assets/imgs/haydenlearningstyle.png';


const Teamprofile = () => {
  return (
    <div id="teamprofiles" className="teamprofile">
      <h1 data-splitting id="titletext-teamprofiles"className="sectionheading__text">Team Profiles.</h1>
      <h2 id="subtext-teamprofiles"className="sectionheading__subtext">Meet our dedicated team &nbsp; //</h2>
      
      
      {/* bo */}
      <div className="teamprofiles__text">
        <div class="body_div">

          <div>
            <h1 className="sectionheading__text" style={{'font-size':'80px'}}>Bo Kim Tran</h1><br/>
            <content>
            <img src={boselfie} alt="" width="200" height="200" style={{'border':'1px solid black'}}/>
            <img src={bodog} alt="" width="200" height="auto" style={{'margin-left': '1%','border':'1px solid black'}}/>
            </content>
          </div>

            <p style={{'color':'white', 'margin-top':'2%'}}>  
                My Website:<a style={{'color': 'white'}} href="https://s3954173.github.io/COSC1078-Assignment-1/">&nbsp;&nbsp;https://s3954173.github.io/COSC1078-Assignment-1/</a>  <br/>
                I was born in Australia but have a half-Chinese and half-Vietnamese ethnicity. In 2019, I undertook a traineeship with Apprenticeship Support Australia. Since then, I have been working as a Client Service Officer providing crucial support to businesses and apprentices especially during COVID and being responsible for administering government subsidies to clients. Some of my hobbies include experimenting with programming languages and playing games like Elden Ring. I especially love going on walks with my pet dog Vilo (see left for maximum adorableness!) 
            
                I have a fair amount of IT experience in terms of what I have learnt or have been exposed to. I have dabbled with Python, Raspberry Pis, building computers, configuring networks, playing VR games and have been continuously exploring the different options available in the IT industry.  
                
                At work, I occasionally become the de facto “IT guy” when the IT department is not available. My current number one interest in IT has been cybersecurity and ethical hacking. It started with prospects of high pay and being the ‘Hacker Man.’  However, further research into this industry gave me motivation to learn vital skills and knowledge to protect myself, my family, and others from the constant threats we face online. Also having legally immunity (when granted by the client) to break into people’s things sounds like fun.   
                
            <br/><br/> How is information helpful to the group?<br/>
            My ‘16 Personalities’ test summarised me as a Logistician. This type of personality is known to be reliable they can stay focused and logical even during high intense situations. My learning style test showed I was primarily a kinesthetic learner meaning I prefer learning new concepts by experiencing and experimenting with them without reading up on these concepts. Finally, in the ‘Big Five’ test, it showed I am a self-driven individual who focuses on completing his duties without compromising his morals and assume a leadership role for group work.  
            A key point I understood from my test outcomes which may be useful to my team, is that I would assume the leadership role and duties in the team. Furthermore, my potential effectiveness as a leader is enhanced by my capability to manage stressful situations and remained focused on the task at hand. This means I can effectively manage and organise the team to complete tasks on schedule, delegate duties, and ensure members are contributing. This thereby can reduce panic and stress from disorganisation, having too much of a workload, or last-minute assignment rushes. This will also provide opportunities for our work to be reviewed and improved before submission. 
            </p>
            <img src={bomyerbriggs} alt="" width="250" height="auto" style={{'padding-right': '1%', 'padding-top':'2%'}} />
            <content style={{'padding-right': '2%'}}>
            <img src={bobig5} alt="" width="400" height="auto" style={{'padding-right': '1%'}} />
            <img src={bolearningstyle} alt="" width="400" height="auto" style={{'padding-right': '5%'}} /> 
            </content>
        </div>

      {/* daniel */}

      <div id="parallax" class="body_div">

<div style={{ 'margin-top':'5%'}}>
<h2 className="sectionheading__text" style={{'font-size':'80px'}}>Daniel Gell</h2><br/>
<content>
<img src={danielselfie} alt="" width="200" height="auto" style={{'border':'1px solid black'}}/>
   </content>
</div>

<p style={{'color':'white','margin-top':'2%'}}>  
    My Website:<a style={{'color': 'white'}} href="https://s3944942.github.io/Assignment-1/">&nbsp;&nbsp;https://s3944942.github.io/Assignment-1/</a>  <br/>
    Hello, I am Daniel Gell, a member of the Block Market team, my student number is s3944942, and I’ve just moved to Melbourne this year (2022) for university, previously residing in the Gippsland town of Rosedale. My main hobby is music, I’ve been playing guitar for nearly a decade, and have picked up various other instruments throughout the years. I am also an avid collector of music, with a collection of CDs, vinyl records, and cassette tapes amassing about 350 albums in total. My interest in IT mostly stemmed from my year 12 IT teacher, Mr Donald Watson, he was very informative in how he taught and it gave me a love of IT that I still have till this day. I have little to no actual practical experience in IT however, aside from a few data entry jobs I did for my mother’s bookkeeping company.  I occasionally become the de facto “IT guy” when the IT department is not available. My current number one interest in IT has been cybersecurity and ethical hacking. It started with prospects of high pay and being the ‘Hacker Man.’  However, further research into this industry gave me motivation to learn vital skills and knowledge to protect myself, my family, and others from the constant threats we face online. Also having legally immunity (when granted by the client) to break into people’s things sounds like fun.   
    
<br/><br/> How is information helpful to the group?<br/>
Myers-Briggs personality type: ENTP-T <br/>
Apparently I’m a debater, meaning I should be good in a team for 
challenging other people’s ideas if I don’t think they would work, 
allowing me to be a useful tool in our team’s arsenal by not allowing 
other people’s ideas to go unchallenged, leading us to a higher 
standard of work. 
 <br/><br/>

Learning type: Auditory/Tactile Learner <br/>
I learn best by doing things myself, which allows me to experiment 
with trial and error to get the best results in any new skills that we 
are taking on for our task. For example HTML, I just started making 
my assignment 1 website with no prior experience and just learned it 
all as I went, rather than watching a video and seeing all the 
possibilities of HTML. 
<br/><br/>
Creativity Test: 66.43% creative <br/>
This means that I am above average creatively, so I should have 
more of a hand in the creative side of things, such as the website 
design. And in our groups having someone who is less creative and 
sees things more in black and white could ground me a bit to ensure 
my ideas aren’t too far-fetched out and out there.     </p>
<img src={danielmyerbriggs} alt="" width="250" height="auto" style={{'padding-right': '1%','padding-top':'2%'}} />
<content style={{'padding-right': '2%'}}>
<img src={daniellearningstyle} alt="" width="400" height="auto" style={{'padding-right': '1%',}} />
<img src={danielcreativity} alt="" width="400" height="auto" style={{'padding-right': '5%'}} />
</content>
</div>

{/* van */}
<div style={{ 'margin-top':'5%'}} class="body_div">

    <div>
    <h2 className="sectionheading__text" style={{'font-size':'80px'}}>Van Pham</h2> <br/>
    <content>
    <img src={vanselfie} alt="" width="200" height="auto" style={{'border':'1px solid black'}}/>
    
    </content>
    </div>
    
    <p style={{'color':'white','margin-top':'2%','margin-bottom':'2%'}}>
        My Website:<a style={{'color': 'white'}} href="https://phamilyvan.github.io/COSC---IIT---Assignment-1/">&nbsp;&nbsp;https://phamilyvan.github.io/COSC---IIT---Assignment-1/</a>  <br/>
        My name is Van Pham, student number s3788106, email of s3788106@student.rmit.edu.au and studying in Bachelor of Information Technology. I was previously enrolled in Computer Science but opted to change courses. The reasons being: Enrolling in a program that is more suited towards my capabilities and freeing up time to pursue other professional interests (being data analytics and data science) as well as leisure.   

        <br/><br/>

        Born in Australia with a Vietnamese background, I can speak English, Vietnamese and in the recent years, have picked up Japanese. A fact that one might find interesting about me is that I’m an avid gamer, especially the genres of First-Person Shooters and Role-Playing Games. My favourite titles are “Counter-Strike Global Offensive” and “Skyrim”.  
        
        <br/><br/>
        
        Before starting my studies at RMIT, whenever the term “IT” came up in conversation, I would always think of Artificial Intelligent Systems, Machine Learning and an Interconnected world using Technology. Those assumptions were heavily influenced by Japanese films such as “Ghost in the shell” and “Time of Eve” as well as games like “Deus Ex”. The conceptualisation of what a future society that is intertwined with technology has fascinated me ever since enjoying these medias a few years back. Rather than just watching by the sideline, pursuing a career in IT, where I could create these technologies seemed much more appealing to me, hence my enrolment at RMIT.   
        
         <br/><br/>
        
        After having studied for a couple of years with exposure to software development using Java, Databases and many other disciplines, my interest (much the same as before studying at RMIT) largely remains the same in Artificial Intelligence, Machine Learning and Data Analytics. More specifically, I would someday like to create a self-thinking, intelligent system. Examples of developments in Artificial Intelligence that has piqued my interest in recent years includes Tesla’s self-driving cars, the robot Sophia and OpenAI’s Dota 2 AI.        
    <br/><br/> How is information helpful to the group?<br/>
    My test results may be helpful to my team as it provides an indication of the points in which may cause issues such as lack of communication as a trait from being introverted. Additionally, the Big 5 Personality Test described me as being 50% conscientious which has implications regarding motivation and discipline. This may cause issues when it comes to deliverables. These points provide an opportunity to improve and manage said flaws.     </p>
    <img src={vanmyerbriggs} alt="" width="300" height="auto" style={{'padding-right': '1%' }} />
    <content style={{'padding-right': '1%'}}>
    <img src={vanbig5} alt="" width="400" height="auto" style={{'padding-right': '1%' }} />
    <img src={vanlearningstyle} alt="" width="400" height="auto" style={{'padding-right': '2%'}} />
    </content>
    </div>

{/* russell */}
<div style={{ 'margin-top':'5%'}} class="body_div">

    <div >
    <h2 className="sectionheading__text" style={{'font-size':'80px'}}>Russell Saw</h2><br/>
    <content>
    <img src={russellselfie} alt="" width="200" height="auto"  style={{'border':'1px solid black'}}/>
    
    </content>
    </div>
    
    <p style={{'color':'white','margin-top':'2%','margin-bottom':'2%'}}>  
        My Website:<a style={{'color': 'white'}} href="https://sviozrsx29.github.io/COS1078_Assignment1/">&nbsp;&nbsp;https://sviozrsx29.github.io/COS1078_Assignment1/</a>  <br/>
        Greetings! My name is Russell Saw and I am currently a student studying a Bachelor of IT in RMIT. I am Malaysian-Chinese by decent but have spent most of my childhood growing up in Melbourne (migrated at the end of 04) – and thus have adopted a strong Australian culture – with some Asian roots. While almost exclusively speaking English with friends and family, I can understand slight amounts of Cantonese and Chinese – something I’d love to expand by understanding on. My past education consists of a finished VCE (Highvale Secondary), 4 years of undergrad experience (Design at melbuni / IT at monash) and now finally finishing a Bachelor of IT at RMIT.  

 
<br/><br/>
My Myers-Briggs test results show me to be extraverted, intuitive, thinking, prospecting, and assertive, this means that I can use these parts of my personality to be more open to the group with my ideas and perhaps put out ideas that might not go over well, but could be useful, as well as dealing out some harsh truths when needed. I can also think about my group’s ideas and thoughts using my intuition and imagine how the ideas would play out in a real-world scenario. This combined with my thinking attitude gives me a good idea on how my personality will impact the group. With my Big 5 Personality test it shows me to have a very open and extroverted personality, further confirming the Myers-Briggs test results, this also shows me to be more agreeable than not, allowing my ideas to be well received by the group. This test also shows me to be not very neurotic, meaning that I won’t easily be stressed in difficult situations. My final test shows me to be mostly empathetic and analytical, which is useful for seeing other group members ideas as they would, but also taking a magnifying glass to them to work out what the most logical way to do that. 
    </p>
    <img src={russellmyerbriggs} alt="" width="250" height="auto" style={{'padding-right': '1%'}} />
    <content style={{'padding-right': '1%'}}>
    <img src={russellbig5} alt="" width="400" height="auto" style={{'padding-right': '1%'}} />
    <img src={russellvark} alt="" width="400" height="auto" style={{'padding-right': '1%'}} />
    </content>
    </div>

{/* hayden */}
<div style={{ 'margin-top':'5%'}} class="body_div">

    <div>
    <h2 className="sectionheading__text" style={{'font-size':'80px'}}>Hayden McKenzie</h2><br/>
    <content>
    <img src={haydenselfie} alt="" width="200" height="auto"  style={{'border':'1px solid black'}}/>
    
    </content>
    </div>
    
    <p style={{'color':'white','margin-top':'2%','margin-bottom':'2%'}}> 
        My Website:<a style={{'color': 'white'}} href="https://HaydenMcKenzie.github.io/AssignmentOne/ ">&nbsp;&nbsp;https://HaydenMcKenzie.github.io/AssignmentOne/ </a>  <br/> 
        My name is Hayden McKenzie. My student number is s3897476. I have a turtle named Argon. Other than programming, my other hobbies include playing the guitar and sports and fitness. I was striving to play professional basketball however in 2018, I tore my ACL. Through the process of recovery, I discovered that I would love to help others through recovery and decided to become a chiropractor. However, I started working at a chiropractic clinic and I saw the effects of COVID and decided I didn’t want my future occupation to be affected by a random event such as COVID. 
<br/><br/>
        My IT experience includes getting an internship at a sports tech company as a full stack developer. This has given me a good range of experience with UI/UX design, Back-end development and Database systems. The languages I have learnt are Python, Java, C#, C++, NodeJS, ReactJS, AngularJS, PHP and MySQL. I have also dabbled with Raspberry Pis, and I have built multiple computers. I have been exploring all the possible options in the IT industry and tried to gain as many skills as possible so that I am not limited. 
<br/><br/>
Myers-Briggs Personality Type: Entrepreneur ESTP  <br/>

According to the Myers Briggs personality type test (www.16personalities.com) my personality type is entrepreneur. In summary, it means that I have an impact on my immediate surroundings. A way this could be accomplished by being the center of attention.  

In a team situation, the ability to take charge and dive into a project head first can be a beneficial trait, this could be getting things done and learning from their mistakes. However, it could be a drawback in a team situation in that they are a loud and attention focused personality, which might clash with some other personalities. 
 <br/><br/>

Learning Type: Auditory <br/> 

According to the Learning Type (www.educationplanner.org) my learning type is auditory. In summary, an auditory learner learns through hearing and learning. This could be done through sitting where the learner can hear well, use flashcards, read out loud to remember and reading tests and new material out loud just to name a few. 

In a team situation, being with the group and listening to everyone’s ideas allows for greater teamwork. This allows every teammate to be heard. However, the only down side for an auditory is that reading long word documents may take longer than others. 
 
<br/><br/>
Personality test: Open to experience, extraversion and neuroticism  <br/>

According to a second personality test conducted at (www.my-personality-test.com) my personality test is open to experience, extraversion and neuroticism. In summary, a person that is open to experience which means that they are willing to try anything to gain experience. If someone is extraverted, it means they gain energy from being around people. Neuroticism in a very general term means that the person is unsatisfied with themselves and their lives. 

In a team situation, being open to experience can be hit or miss. This means that there are decisions that are risky that can either be the best thing for the group or tear it apart. Being extravert means that I would like to be around my team, however this might clash with people that are introverted. I don’t believe I am neurotic just being I have a goal in life that I thought I was going to take longer than 3 years however, seems to be achieved by the of 2022. However, people with neuroticism might clash with other teammates due to always wanting things done so that they can achieve a sense of achievement or satisfaction with their life, and mistakes may leads to friction.   
    </p>
    <img src={haydenmyerbriggs} alt="" width="250" height="auto" style={{'padding-right': '1%'}} />
    <content style={{'padding-right': '1%'}}>
    <img src={haydenlearningstyle} alt="" width="400" height="auto" style={{'padding-right': '1%'}} />
    <img src={haydenbig5} alt="" width="400" height="auto" style={{'padding-right': '1%'}} />
    </content>
    </div>

<div className='body_div' style={{'margin-top':'5%'}}>
<h2 className="sectionheading__text" style={{'font-size':'80px'}}>Group Processes</h2><br/>

<h2 className="sectionheading__text" style={{'font-size':'80px'}}>Career Plans</h2><br/>
</div>
  












      </div>
    </div>
  )
}

export default Teamprofile