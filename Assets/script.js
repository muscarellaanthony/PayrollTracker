// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
  const collectEmployees = function(){
  // TODO: Get user input to create and return an array of employee objects
  // create array that will hold every employee entry
  const allEmployees = [];
  // create a boolean to dictate loop repetition
  let addAnother = true;
  // create a loop that will take user input for an employee and repeat for several possible entries
  while (addAnother){ 
    // create employee object that will enter the overall list indiviually
    let employee ={};
    //ask for basic employee data
    employee.firstName = prompt("Enter first name: ");
    employee.lastName = prompt("Enter last name: ");
    employee.salary = parseInt(prompt("Enter salary: ")); //turn salary string to an integer
    // error message for salary entries that aren't a number, default salary to 0
    if (isNaN(employee.salary)){
       alert("Salary is not a number. Setting salary to 0.");
       employee.salary = 0;
    }
    // enter employee object to allemployee array
    allEmployees.push(employee);
    addAnother = confirm("Would you like to add another?");
  }
  //return the array of emplyoees
  return allEmployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // initialize a totalSalary variable to 0
  totalSalary = 0;
  // create a loop that will cycle though each emplyees recorded salary
  for (i=0;i<employeesArray.length;i++){
    // create a variable that will hold the employee array identification 
    const currentEmployee = employeesArray[i];
    // add emplyees salary to totalSalary
    totalSalary += parseInt(currentEmployee.salary);
  }
  // calculate employee average salary with total salary
  let averageSalary = totalSalary / employeesArray.length;
  console.log(`Average salary is ${averageSalary}.`)
  console.log(`There are ${employeesArray.length} employees.`)
  return averageSalary;
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // pick a whole number between 0 and the length of the employee list
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  // use that number to choose the corresponding employee in the employee array
  console.log(`Congrats to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}!`);
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
