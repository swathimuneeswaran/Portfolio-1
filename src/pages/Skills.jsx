import React from 'react'
import "./Skill.css"
import Navbar from '../components/Navbar'

const Skills = () => {
  return (
   <>
   <Navbar />
   <section className="skill">
        <div className="container1" id="skills">
          <div className="head">
            <h2 className="heading12" >My<span style={{color:"aqua"}}> Skills</span></h2>
          </div>
            <div className="Technical-bars">
                <div className="bar"><i style={{color:"#c95d2e"}}className='bx bxl-html5'></i><span className="ht">HTML</span>
                    <div className="info">
                        <span>HTML</span>
                    </div>
                    <div className="progress-line html">
                        <span></span>
                    </div>
                </div>

                <div className="bar"><i style={{color:"#147bbc"}} className='bx bxl-css3'></i><span className="ht">CSS</span>
                    <div className="info">
                        <span>CSS</span>
                    </div>
                    <div className="progress-line css">
                        <span></span>
                    </div>
                </div>

                <div className="bar"><i style={{color:"#b0bc1e"}} className='bx bxl-javascript'></i> <span className="ht">JavaScript</span>
                    <div className="info">
                        <span>JavaScript</span>
                    </div>
                    <div className="progress-line javascript">
                        <span></span>
                    </div>
                </div>

                <div className="bar"><i style={{color:"#147bbc"}} className='bx bxl-react'></i><span className="ht">Reactjs</span>
                    <div className="info">
                        <span>React</span>
                    </div>
                    <div className="progress-line react">
                        <span></span>
                    </div>
                </div>


                <div className="bar"><i  style={{color:"#3C873A"}} className='bx bxl-nodejs'></i><span className="ht">Nodejs</span>
                    <div className="info">
                        <span>Nodejs</span>
                    </div>
                    <div className="progress-line node">
                        <span></span>
                    </div>
                </div>


                <div className="bar"><i style={{color:"#3C873A"}} className='bx bxl-mongodb'></i><span className="ht">Mongodb</span>
                    <div className="info">
                        <span>Mongodb</span>
                    </div>
                    <div className="progress-line Mongo">
                        <span></span>
                    </div>
                </div>

                
            </div>

           
        </div>
    </section>
   </>
  )
}

export default Skills