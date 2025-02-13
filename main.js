document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero h1", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
  });

  gsap.from(".hero p", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  });
  gsap.from(".hero h2 ", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  });
  gsap.from(".hero li ", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
    },
    stagger: 0.5,
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  });

  gsap.from(".hero .cta-button", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
  });

  gsap.from(".news-card", {
    scrollTrigger: {
      trigger: ".news",
      start: "top center",
    },

    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  });

  gsap.from(".services-grid", {
    scrollTrigger: {
      trigger: ".services",
      start: "top center",
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  gsap.from(".contact-info", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  });

  const form = document.querySelector(".contact-form");
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.innerText = "Your message has been sent successfully!";
  document.body.appendChild(popup);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    popup.classList.add("show");
    form.reset();
    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  });

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.innerText = "Top";
  scrollToTopBtn.style.display = "none";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document
    .getElementById("book-appointment")
    .addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("our-specialists")
    .addEventListener("click", function () {
      document.getElementById("doctors").scrollIntoView({ behavior: "smooth" });
    });
});
