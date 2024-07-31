import React from 'react'
import { Link } from 'react-router-dom'
import "./createunit.scss";

const CreateUnitt = () => {
  return (
    <div>
       
        <div className="card border-primary col-9 " style={{marginLeft:"300px",marginTop:"50px"}}>
  <div  className="card-header">  
  <h5 className="card-title">CREATE NEW UNIT LIST</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Accessory list</button>
  <button type="button" class="btn btn-outline-primary">Create Accessory</button>
 
</div>
</div>
  <div className="card-body ">
    
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<div className="container">

    <form>
  
    <div  className="input-wrapper">
  <label htmlFor="first">Unit Name</label>
  <input  type="text" />
</div>

{/* <fieldset>
  <legend>Login</legend> 
  <table>
    <tbody><tr><td>Username</td><td><input type="text" /></td></tr>
      <tr><td>Password</td><td><input type="text" /></td></tr>
    </tbody></table>
</fieldset> */}

<div style={{padding:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>

  </div>
</div>
      
 
      
    </div>
  )
}

export default CreateUnitt
