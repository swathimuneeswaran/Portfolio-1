import React from "react";
import "./Education.css";
import educa from "./education.gif"
import Certification from "./Certification";
import Navbar from "../components/Navbar";
import Intern from "./Intern";


const education = [
  {
    id: 1,
    name: "Kongu Engineering College",
    year: "2019-2023",
    cgpa: "7.8",
  },
  {
    id: 2,
    name: "Vidya Vikashni Matriculation Higher Secondary School",
    year: "2018-2019",
    cgpa: "73",
    description: "Succesfully completed the HSC with percentage of",
  },
  {
    id: 3,
    name: "Vidya Vikashni Matriculation Higher Secondary School",
    year: "2016-2017",
    cgpa: "96",
    description: "Succesfully completed the SSLC with percentage of",
  },
];
const Education = () => {
  return (
    <>
    <Navbar />
      <div className="full_container" style={{marginTop:"5px"}}>
      <div className="contain1">
       <img src={educa} width="300px" height="100px" style={{marginRight:"50px"}}></img>
       {/* <h3 style={{color:"white",marginLeft:"0px",marginRight:"20px"}}>=====></h3> */}
        <table style={{height:"300px",textAlign:"center"}}>
          <thead style={{height:"50px"}}>
            <tr>
              <th>S.No</th>
              <th>School/College</th>
              <th>Year</th>
              <th>Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr>
                <td>{edu.id}</td>
                <td>{edu.name}</td>
                <td>{edu.year}</td>
                <td>{edu.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <Certification />
      <Intern />
      </div>
  
    

    </>
  );
};

export default Education;
