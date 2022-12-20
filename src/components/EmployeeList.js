const EmployeeList = (props) => {
    return (
     <div style={{ backgroundColor: "#FFEBCD", padding: "20px 10px" }}>
       {props.data.map((employee) => {
         return (
           <p
           key = {employee.id}
             onClick={() => {
               props.setSelectedEmployee(employee.id);
             }}
             style={{ cursor: "pointer" }}
             role="button"
           >
             ID: {employee.id}  Name: {employee.name} Department: {employee.department}
           </p>
         );
       })}
     </div>
   );
 };
 
 export default EmployeeList;