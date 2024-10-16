import React from 'react';
import "./Certificate.css";
import training1 from "./training1.gif";

const Intern = () => {
  return (
    <>
      <div className="full" style={{ paddingBottom: "40px" }}>
        <img
          src={training1}
          width="300px"
          height="200px"
          style={{ marginRight: "50px", cursor: "pointer" }}
          className="certi"
          alt="Training Certificate"
        />
        <table style={{ height: "300px", textAlign: "center!important", padding: "0 20px" }}>
          <thead style={{ height: "50px" }}>
            <tr >
              <th>S.No</th>
              <th>Company</th>
              <th>Year</th>
              <th>Intern Certificate link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign:"center"}}>1</td>
              <td style={{textAlign:"center"}}>Karmadev</td>
              <td style={{textAlign:"center"}}>July 2024 - Oct 2024</td>
              <td style={{textAlign:"center"}}>
                <a href="https://drive.google.com/file/d/1nHrnkKGZrpJX15RpeZHNqPYTqPxzIred/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                https://drive.google.com/file/d/1nHrn<br></br>kKGZrpJX15RpeZHNqPYTqPxzIred/view?usp=sharing
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Intern;
