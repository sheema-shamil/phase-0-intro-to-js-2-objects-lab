// Write your solution in this file!
const employee= {} 
  
 employee.name= "Franklin"; 
 streetAdress= "Koma"; 
  
 function updateEmployeeWithKeyAndValue(object, key, value){ 
     const newObj={...object}; 
     newObj[key]= value; 
     return newObj; 
 } 
 const firstEmployee = updateEmployeeWithKeyAndValue(employee, "streetAdress", "19 Koma"); 
  
 console.log(firstEmployee); 
  
 const secondEmployee=updateEmployeeWithKeyAndValue(employee['streetAddress']); 
  
 console.log(secondEmployee); 