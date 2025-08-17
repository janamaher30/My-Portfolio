// main.js

// ========== 1. Typing Effect in Home ==========
const typingText = document.querySelector(".text h1");
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); 
    }
  }
  typeWriter();
}

// ========== 2. Close Navbar on Link Click ==========
const navLinks = document.querySelectorAll("nav ul li a");
const menuToggle = document.querySelector("#menu-toggle");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (menuToggle) menuToggle.checked = false;
  });
});

// ========== 3. Scroll Animation ==========
const sections = document.querySelectorAll("section, .skills, .timeline, .vision, .projects-section, .contact-section");

function revealOnScroll() {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add("reveal");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); 


// ========== 4. Contact Form Popup ==========
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert("✅ Message Sent Successfully!");
    contactForm.reset();
  });
}

// ========== 5. Project Image Modal ==========
const projectImages = document.querySelectorAll(".project-card img");
if (projectImages.length > 0) {
  const modal = document.createElement("div");
  modal.classList.add("img-modal");
  modal.innerHTML = `<span class="close">&times;</span><img class="modal-content">`;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".close");

  projectImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
