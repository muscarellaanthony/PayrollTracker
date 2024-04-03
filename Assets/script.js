// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
  const collectEmployees = function(){
  // TODO: Get user input to create and return an array of employee objects
  const allEmployees = [];
  let addAnother = true;
  while (addAnother){ 
    let employee ={};
    employee.firstName = prompt("Enter first name: ");
    employee.lastName = prompt("Enter last name: ");
    employee.salary = prompt("Enter salary: ");
    if (isNaN(employee.salary)){
       alert("Salary is not a number. Setting salary to 0.");
       employee.salary = 0;
    }
    allEmployees.push(employee);
    addAnother = confirm("Would you like to add another?");
  }
  return allEmployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  totalSalary = 0;
  for (i=0;i<employeesArray.length;i++){
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  return averageSalary;
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  console.log(employeesArray[randomEmployee].firstName);
  console.log(employeesArray[randomEmployee].lastName);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
