// 🌗 THEME TOGGLE WITH MEMORY
const toggle = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// Load saved theme from localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  }
}

// Toggle logic
toggle.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  }
});

// 💫 PROJECT MODALS
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "block";
  modal.querySelector(".modal-content").style.transform = "scale(1.05)";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modals when clicking outside
window.onclick = (event) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) modal.style.display = "none";
  });
};

// 💌 CONTACT FORM (Frontend-only simulation)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending ❤️");
      return;
    }

    // Create confirmation popup
    const confirmation = document.createElement("div");
    confirmation.textContent = "✨ Message received! I’ll get back to you soon.";
    confirmation.style.position = "fixed";
    confirmation.style.bottom = "30px";
    confirmation.style.right = "30px";
    confirmation.style.background = "var(--accent-color)";
    confirmation.style.color = "#fff";
    confirmation.style.padding = "1rem 1.5rem";
    confirmation.style.borderRadius = "12px";
    confirmation.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    confirmation.style.zIndex = "9999";
    confirmation.style.fontWeight = "500";
    confirmation.style.transition = "opacity 0.4s ease";
    document.body.appendChild(confirmation);

    // Fade away after 2.5 seconds
    setTimeout(() => {
      confirmation.style.opacity = "0";
      setTimeout(() => confirmation.remove(), 400);
    }, 2500);

    contactForm.reset();
  });
}
// PROJECT IMAGE MODAL 🖼️
let images = [];
let currentIndex = 0;

function openImageModal(imgArray) {
  images = imgArray;
  currentIndex = 0;
  document.getElementById("modalImage").src = images[currentIndex];
  document.getElementById("imageModal").style.display = "block";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modalImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentIndex];
}

window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) modal.style.display = "none";
};
