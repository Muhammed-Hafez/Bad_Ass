document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-placeholder");
  if (footerContainer) {
    fetch("footer.html")
      .then((res) => res.text())
      .then((data) => {
        footerContainer.innerHTML = data;
      })
      .catch((err) => console.error("Error loading footer:", err));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const allImages = document.querySelectorAll("img:not(.header-image)");

  allImages.forEach((img) => {
    if (img.parentNode.classList.contains("image-hover-box")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "image-hover-box";

    const shade = document.createElement("div");
    shade.className = "bottom-shade";

    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(shade);
  });

  // -----------------------
  // handle side hover effect for header images
  const headerImages = document.querySelectorAll(".header-image");

  headerImages.forEach((img) => {
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;

      const edgeSize = 40; // عدد البكسلات من الطرف اللي يعتبرها "طرف"

      if (x < edgeSize || x > rect.width - edgeSize) {
        img.classList.add("hover-on-edge");
      } else {
        img.classList.remove("hover-on-edge");
      }
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("hover-on-edge");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const headerImages = document.querySelectorAll("img.header-image");

  headerImages.forEach((img) => {
    // لو الصورة متغلفة بالفعل نعدي
    if (img.parentNode.classList.contains("header-image-container")) return;

    const wrapper = document.createElement("div");
    wrapper.classList.add("header-image-container");

    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
  });

  // Add hover effect on left/right edges
  const headerContainers = document.querySelectorAll(".header-image-container");

  headerContainers.forEach((container) => {
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const edgeSize = 40;

      if (x < edgeSize || x > rect.width - edgeSize) {
        container.classList.add("hover-on-edge");
      } else {
        container.classList.remove("hover-on-edge");
      }
    });

    container.addEventListener("mouseleave", () => {
      container.classList.remove("hover-on-edge");
    });
  });
});

// Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Initialize Swiper

// Scroll Animation
function handleScrollAnimation() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      const delay = element.getAttribute("data-delay") || 0;
      setTimeout(() => {
        element.classList.add("active");
      }, delay);
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
