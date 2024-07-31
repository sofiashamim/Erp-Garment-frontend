import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Merchandiser = () => {
    const data = [
        {
          id: 1,
          name: 'rr',
          phone:'PESO',
          userName:'$12.00',
          action: <MoreVertIcon/>,
         }]
  return (
    <div>
       <div className="row" >
        <div style={{marginLeft:"300px",marginTop:"100px"}} className="col-9">
          <div className="card">
            <div className="card-content">
              <div style={{display:"flex"}} className="card-body titleHead">
                <h4 style={{position:"fixed"}} className="card-title">
                 MERCHANDISER LIST
                  
                </h4>

                <div style={{marginTop:"100px",marginRight:"100px"}} class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                
                <div style={{position:"fixed",marginLeft:"600px"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Merchandiser list</button>
  <button type="button" class="btn btn-outline-primary">Add New Merchandiser</button>
 
</div>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Phone</th>
                <th>User Name</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.userName}</td>
                  <td>{item.action}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Merchandiser