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

window.addEventListener('scroll', function() {
  const contactSection = document.querySelector('#contact .content');
  const contactPosition = contactSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3; // Trigger when it's visible enough

  if (contactPosition < screenPosition) {
    document.querySelector('.matter').style.transform = 'translateX(0)';
    document.querySelector('.matter').style.opacity = '1';
    document.querySelector('.contact-form').style.transform = 'translateX(0)';
    document.querySelector('.contact-form').style.opacity = '1';
  }
});