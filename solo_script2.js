// ! ! !
// Three Bugs

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var array = [atticus, jem, boo, scout];
console.log(array);


// //Create variables used to write to the DOM
// var newEl, newText, position;
// //Capture the position of insertion into the DOM
// position = document.getElementById('content');

// //Loop the array, extracting each array and writing information to the DOM
// //Note that the information is not 'clean'


var newEmployeeArray =[];

$(document).ready(function(){
  for(var i = 0; i < newEmployeeArray.length; i++){
    appendDom(newEmployeeArray[i]);
}
});


function appendDom (object) {
  $('.container').append('<div class="person"></div>');

  var $el = $('.container').children().last();

  $el.append('<h1>' + object.name + '</h1>');
  $el.append('<p>' + "Salary: " + object.salary + '</p>');
  $el.append('<p>' + "Bonus: " + object.bonus + '</p>');
  $el.append('<p>' + "Total Income: " + object.postBonus + '</p>');
}



 for(var i = 0; i < array.length; i++){
   calculateSTI(array[i]);
// //   newEl = document.createElement('li');
// //   newText = document.createTextNode(array[i]);
// //  newEl.appendChild(newText);
// //  position.appendChild(newEl);
//     newEmployeeArray.push(newEmployeeObject);
}


function Person (name, number, salary, rating) {
  this.name = name;
  this.number = number;
  this.salary = salary;
  this.rating = rating;
}

function EmployeeNewObject (name, salary, bonus, postBonus) {
  this.name = name;
  this.salary = salary;
  this.bonus = bonus;
  this.postBonus = postBonus;
  newEmployeeArray.push(this);
 
}

  function calculateSTI(employee){
  
  var newPerson = new EmployeeNewObject; 
  newPerson.name = employee.name; 

  var employeeNumber = employee.number;
  var baseSalary = employee.salary;
  var reviewScore = employee.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newPerson.salary = employee.salary
  newPerson.postBonus = Math.round(baseSalary * (1.0 + bonus)); //add Math.round() method
  newPerson.bonus = baseSalary * bonus;

  return newPerson;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
    default:
    case 0:
    basePercent = 0;
    break;
  }
  return basePercent; //remove the -1 //
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}



