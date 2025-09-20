// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you, " + name + "! Your message has been sent.");
      form.reset();
    });
  }
});

// Newsletter Subscription
function subscribe() {
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter your email to subscribe.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("🎉 Thanks for subscribing! You'll now receive our weekly tips.");
  emailInput.value = "";
}

// Utility function: Validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}