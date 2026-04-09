function demoAlert() {
  alert("This is a demo chatbot for class presentation.");
}
function reviewAlert() {
  alert("Profile submitted. Proceeding to professional review (demo).");
  window.location.href = "review.html";
}
function appointmentAlert() {
  alert("Appointment request submitted successfully. This is a demo.");
}
function startLoading() {
  window.location.href = "loading.html";
}
function crisisAlert() {
  alert("If you are in immediate danger, please call 911 or a mental health hotline. This demo is not a substitute for emergency care.");
}

let minutes = 12;
let seconds = 0;

setInterval(() => {
  if (seconds === 0) {
    if (minutes === 0) return;
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  let display = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  document.getElementById("sessionTimer").innerText =
    "Session expires in: " + display;

}, 1000);