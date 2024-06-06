// import "./style.css";
// import product from "/product.json"
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  currentSlide += step;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

function openModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function openRegisterModal() {
  document.getElementById("loginModal").style.display = "none"; // Hide login modal
  document.getElementById("registerModal").style.display = "block"; // Show register modal
}

function closeRegisterModal() {
  document.getElementById("registerModal").style.display = "none";
}

// Add a function to close the login modal if needed (can be similar to closeRegisterModal)
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}
