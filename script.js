document.addEventListener("DOMContentLoaded", function () {
  /* Preloader: Sembunyikan setelah halaman selesai dimuat */
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  });

  /* Custom Cursor */
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  // Update posisi kursor sesuai pergerakan mouse
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    cursorFollower.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Efek hover pada elemen interaktif (link & tombol)
  const interactiveElements = document.querySelectorAll("a, button");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      cursorFollower.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      cursorFollower.classList.remove("active");
    });
  });

  /* Mobile Menu Toggle */
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  /* Theme Toggle */
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
      }
    });
  }

  /* Typed Text Effect (Typed.js) */
  if (document.querySelector(".typed")) {
    new Typed(".typed", {
      strings: ["Active in OSIS", "Fun and Fabulous", "Cat Lover"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  }

  /* Header Scroll Effect */
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* Back-to-Top Button */
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* (Opsional) GSAP Animations: Tambahkan animasi interaktif lainnya jika diperlukan */
});
