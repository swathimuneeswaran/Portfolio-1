import React from 'react'
import "./Certificate.css"

const Certification = () => {
  return (
    <>
    <div className="full">
    <img src="https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-award-vector-icon-certificate-best-png-image_4661009.png" width="300px" height="200px" style={{marginRight:"50px",cursor:"pointer"}} className='certi'></img>
    {/* <h3 style={{color:"white",marginLeft:"0px",marginRight:"20px"}}>=====></h3> */}
     <table style={{height:"300px",textAlign:"center"}}>
       <thead style={{height:"50px"}}>
         <tr>
           <th>S.No</th>
           <th>Institute</th>
           <th>Year</th>
           <th>Certficate link</th>
         </tr>
       </thead>
       <tbody>
         
           <tr>
             <td>1</td>
             <td>Guvi Geeks Network</td>
             <td>Nov 2023- Feb 2024</td>
             <td></td>
           </tr>
        
       </tbody>
     </table>
     </div>
    </>
  )
}

export default Certification