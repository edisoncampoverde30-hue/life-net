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

function toggleAccessCode() {
  const method = document.getElementById("paymentMethod").value;
  const section = document.getElementById("accessCodeSection");

  if (method === "insurance") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function showProfileForm() {
  const method = document.getElementById("paymentMethod").value;
  const accessCodeSection = document.getElementById("accessCodeSection");
  const profileFormSection = document.getElementById("profileFormSection");

  if (method === "insurance") {
    accessCodeSection.style.display = "block";
    profileFormSection.style.display = "none";
  } else if (method === "outofpocket") {
    accessCodeSection.style.display = "none";
    profileFormSection.style.display = "block";
  } else {
    accessCodeSection.style.display = "none";
    profileFormSection.style.display = "none";
  }
}

function validateCode() {
  const code = document.getElementById("accessCode").value;
  const message = document.getElementById("codeMessage");
  const profileFormSection = document.getElementById("profileFormSection");

  if (code === "1234") {
    message.style.color = "green";
    message.innerText = "Access code accepted. You may continue.";
    profileFormSection.style.display = "block";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid code. Please try again.";
    profileFormSection.style.display = "none";
  }
}
