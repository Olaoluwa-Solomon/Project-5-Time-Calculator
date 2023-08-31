let firstname = document.getElementById("firstName");
var button = document.getElementById("btn");
var Homeinput= document.getElementById("Homeinput");
var navigate = document.getElementById("navigate");

function getUser (){
  if(Homeinput.value=== ""){
    alert("Name cannot be blank");
  return false;
} else if(!(isNaN(Homeinput.value))){
    alert("Name cannot be digits");
    return false;
} else {
getDob();
localStorage.setItem("username", Homeinput.value)
navigate.href = "index.html";
}

}
firstname.innerText = (localStorage.getItem("username")).toUpperCase();

function displayTime(){

    var dateTime = new Date();
    var hrs = String(dateTime.getHours() % 12 || 12).padStart(2,"0");
    var min = String(dateTime.getMinutes()).padStart(2,"0");
    var sec = String(dateTime.getSeconds()).padStart(2,"0");
    var ampm = hours < 12 ? 'AM' : 'PM';
    var hours = (hrs % 12) || 12;


    
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('session').innerHTML = ampm;


    var day = String(dateTime.getDate()).padStart(2,"0");
    var mon = String(dateTime.getMonth()+ 1).padStart(2,"0");
    var yr = dateTime.getFullYear();

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = mon;
    document.getElementById("year").innerHTML = yr;

    
}

setInterval(displayTime, 10);

  const inputDate = localStorage.getItem("dob")
  const dateOfBirth = inputDate;
  const targetDate = calculateTargetDate(dateOfBirth);
    updateCountDown(targetDate);

    setInterval(() => {
      updateCountDown(targetDate);
    }, 1000);

  
function getDob() {
  var dateInput = document.getElementById("dobInput").value;
  if (dateInput === "") {
      alert("Please enter a date.");
      return false;
  } else if (!isValidDate(dateInput)) {
      alert("Please enter a valid date (YYYY-MM-DD).");
      return false;
  } else {

  localStorage.setItem("dob", dateInput)
}
}


function updateCountDown(targetDate) {
  const now = new Date();
  const timeLeft = targetDate - now;

  const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("Year").textContent = years + "yrs";
  document.getElementById("Month").textContent = months + "mths";
  document.getElementById("Week").textContent = weeks + "wks";
  document.getElementById("Day").textContent = days + "days";
  document.getElementById("Hour").textContent = hours + "hrs";
  document.getElementById("Minute").textContent = minutes + "mins";
  document.getElementById("Second").textContent = seconds + "s";
}

function calculateTargetDate(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  birthDate.setFullYear(birthDate.getFullYear() + 100);
  return birthDate;
}

function isValidDate(dateString) {
  var regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;
  var parts = dateString.split("-");
  var year = parseInt(parts[0]);
  var month = parseInt(parts[1]);
  var day = parseInt(parts[2]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  return true;
}