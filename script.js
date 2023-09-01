// Get DOM elements
const firstname = document.getElementById("firstName");
const button = document.getElementById("btn");
const Homeinput = document.getElementById("Homeinput");
const navigate = document.getElementById("navigate");

// Function to get user input
function getUser() {
  if (Homeinput.value === "") {
    alert("Name cannot be blank");
    return false;
  } else if (!isNaN(Homeinput.value)) {
    alert("Name cannot be digits");
    return false;
  } else {
    getDob();
    localStorage.setItem("username", Homeinput.value);
    
  }
}

// Display the username retrieved from localStorage in uppercase
firstname.innerText = (localStorage.getItem("username")).toUpperCase();

// Display current time
function displayTime() {
  const dateTime = new Date();
  const hrs = String(dateTime.getHours() % 12 || 12).padStart(2, "0");
  const min = String(dateTime.getMinutes()).padStart(2, "0");
  const sec = String(dateTime.getSeconds()).padStart(2, "0");
  const ampm = dateTime.getHours() < 12 ? 'AM' : 'PM';
  const hours = (dateTime.getHours() % 12) || 12;

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
  document.getElementById('session').innerHTML = ampm;

  const day = String(dateTime.getDate()).padStart(2, "0");
  const mon = String(dateTime.getMonth() + 1).padStart(2, "0");
  const yr = dateTime.getFullYear();

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = mon;
  document.getElementById("year").innerHTML = yr;
}

// Update time every 10 milliseconds
setInterval(displayTime, 10);

// Retrieve and calculate target date
const inputDate = localStorage.getItem("dob");
const dateOfBirth = inputDate;
const targetDate = calculateTargetDate(dateOfBirth);
updateCountDown(targetDate);

// Update countdown every second
setInterval(() => {
  updateCountDown(targetDate);
}, 1000);

// Function to get date of birth
function getDob() {
  const dateInput = document.getElementById("dobInput").value;
  if (dateInput === "") {
    alert("Please enter a date.");
    return false;
  } else if (!isValidDate(dateInput)) {
    alert("Please enter a valid date (YYYY-MM-DD).");
    return false;
  } else {
    localStorage.setItem("dob", dateInput);
      navigate.href = "Second Page.html";

  }
}

// Update countdown timer
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

// Calculate target date
function calculateTargetDate(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  birthDate.setFullYear(birthDate.getFullYear() + 100);
  return birthDate;
}

// Function to check if a date is valid
function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;
  const parts = dateString.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  return true;
}
