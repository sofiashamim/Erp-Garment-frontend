import React from 'react'
import "./createAccess.scss";
import Sidebar from '../sidebar/Sidebar';

const CreateAccOrder = () => {
  return (
    <div>
      <Sidebar/>
         <div className="card border-primary col-11 " style={{marginLeft:"50px",marginTop:"-600px"}}>
  <div  className="card-header">  
  <h5 className="card-title">CREATE ACCESSORY ORDER LIST</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Accessory list</button>
  <button type="button" class="btn btn-outline-primary">Create Accessory</button>
 
</div>
</div>
  <div className="card-body ">
    
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<div className="container">

    <form>
  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-6" >
  <label htmlFor="first">Accessory Name</label>
  <input placeholder="Accessory Name" type="text" />
</div>

<div style={{height:"50px",marginLeft:"10px",marginTop:"10px"}} class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Unit Name</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">+</button>
</div>
  </div>

  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-6 " >
  <label htmlFor="first">Unit Price</label>
  <input placeholder="Unit Price" type="text" />
</div>

<div  className="input-wrapper col-md-6">
  <label htmlFor="first">Description</label>
  <input placeholder="Description" type="text" />
</div>


  </div>

  


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

export default CreateAccOrder
