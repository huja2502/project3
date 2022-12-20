// const Employee = (props) =>{
//   return <div style = {{padding: '20px 30px', backgroundColor:'#000', color: '#FFF'}}>
//    <h1> {props.data.name}</h1>
   
//    <button onClick = {props.resetState}>Back to List</button>
//   </div>

// }

// export default Employee;


const Employee = (props) =>{
  return (
  <div className="card mx-auto my-5"  style = {{padding: '20px 30px', backgroundColor:'#E9967A', color: '#8B0000' , width:'18rem'}}>
   <img src={props.data.photo} className="card-img-top" alt="..."></img>
   <div className="card-body"> 
   <h5> {props.data.name}</h5>
   <h6>ID : {props.data.id}</h6>
   <h6>Department : {props.data.department}</h6>
   <h6>Start Date : {props.data.startDate}</h6>
   <h6>Role : {props.data.role}</h6>
   </div>
   

   
   <button className="btn btn-danger" onClick = {props.resetState}>Back to List</button>
  </div>
  )
}

export default Employee;
