function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Additionally added code

const roles = ["Front-End Developer", "Mern Stack Developer", "Java Developer"];
let roleIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function changeText() {
  roleIndex = (roleIndex + 1) % roles.length;
  dynamicText.textContent = roles[roleIndex];
}

setInterval(changeText, 2000); // Change text every 2 seconds

