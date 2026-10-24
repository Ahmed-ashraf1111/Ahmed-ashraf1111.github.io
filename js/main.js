// Portfolio scripts - Ahmed Ashraf
// 1) mobile menu  2) footer year  3) image viewer (lightbox)

// ---------- Mobile menu ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after the user taps a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("lightboxPrev");
const nextBtn = document.getElementById("lightboxNext");

// The images of the gallery that is currently open, and the current position
let currentShots = [];
let currentIndex = 0;

function showImage(index) {
  // Wrap around so next on the last image goes back to the first one
  currentIndex = (index + currentShots.length) % currentShots.length;

  const shot = currentShots[currentIndex];
  const thumb = shot.querySelector("img");

  lightboxImg.src = shot.dataset.full;
  lightboxImg.alt = thumb ? thumb.alt : "";
  lightboxCaption.textContent = shot.dataset.caption || "";
}

function openLightbox(shots, index) {
  currentShots = shots;
  showImage(index);

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lightboxImg.src = "";
}

// Every gallery only navigates between its own images
document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
  const shots = Array.from(gallery.querySelectorAll(".shot"));

  shots.forEach(function (shot, index) {
    shot.addEventListener("click", function () {
      openLightbox(shots, index);
    });
  });
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", function () {
  showImage(currentIndex - 1);
});
nextBtn.addEventListener("click", function () {
  showImage(currentIndex + 1);
});

// Click on the dark background closes the viewer
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard support
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showImage(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    showImage(currentIndex + 1);
  }
});