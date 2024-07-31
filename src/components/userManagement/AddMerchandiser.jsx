import React from 'react'
import Sidebar from '../sidebar/Sidebar';

const AddMerchandiser = () => {
  return (
    <div>
         <Sidebar/>
         <div className="card border-primary col-11 " style={{marginLeft:"50px",marginTop:"-600px"}}>
  <div  className="card-header">  
  <h5 className="card-title">ADD MERCHANDISER</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Merchandiser list</button>
  <button type="button" class="btn btn-outline-primary">Add Merchandiser</button>
 
</div>
</div>
  <div className="card-body ">
    
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<div style={{display:"flex"}} className="container">
<div>
<form>
  <div style={{display:"flex",gap:"10px"}}>
    
  <div  className="input-wrapper col-md-4" >
  <label htmlFor="first">Full Name</label>
  <input style={{width:"50px"}} placeholder="Accessory Name" type="text" />
</div>
<div  className="input-wrapper col-md-4">
  <label htmlFor="first">Phone</label>
  <input style={{width:"50px"}} placeholder="phone" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>

  <div style={{height:"50px",marginLeft:"10px",marginTop:"10px",width:"50px"}} class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Role</option>
    <option value="1">Admin</option>
    <option value="2">Buyer</option>
    <option value="3">Manager</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">+</button>
</div>
    
  <div  className="input-wrapper col-md-6 " >
  <label htmlFor="first">User Name</label>
  <input placeholder="User name" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-4" >
  <label htmlFor="first">Password</label>
  <input placeholder="Password" type="text" />
</div>
<div  className="input-wrapper col-md-4">
  <label htmlFor="first">Confirm Password</label>
  <input placeholder="Description" type="text" />
</div>
  </div>

<div style={{padding:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>

<div>
<img style={{borderRadius:"100%",border:"1px solid black",height:"200px",width:"200px"}} src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg" alt="" />
<label style={{marginLeft:"680px",marginTop:"310px"}} htmlFor="">Upload Image</label>
<input type="file" />
</div>
   
</div>

  </div>
</div>
      
    </div>
  )
}

export default AddMerchandiser
