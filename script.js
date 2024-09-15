document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById("myNavMenu");
  menu.classList.toggle("active");
}

document.querySelectorAll(".nav_menu_list a").forEach(anchor => {
  anchor.addEventListener("click", () => {
      const menu = document.getElementById("myNavMenu");
      menu.classList.remove("active");
  });
});
  // Initialize EmailJS
(function() {
  emailjs.init("xj7efNniBuD0irVxX");  // Replace with your EmailJS Public Key
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent default form submission

  // Collect the form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email via EmailJS
  emailjs.send("service_lrn86kx", "template_nev3d2a", {
    name: name,
    email: email,
    message: message
  })
  .then(function(response) {
    alert("Message sent successfully!");  // Show success message
  }, function(error) {
    alert("Failed to send message: " + error);  // Show error message
    alert("Failed to send message. Check console for details.");
  });
});
