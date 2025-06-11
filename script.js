document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

document.querySelectorAll("#carousel-track a").forEach((link) => {
  link.setAttribute("target", "_blank");
});

// Carrossel simples
const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const totalCards = 9;
const cardsPerView = 3;
let currentIndex = 0;

function updateCarousel() {
  const percent = -(100 / cardsPerView) * currentIndex;
  track.style.transform = `translateX(${percent}%)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - cardsPerView;
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - cardsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

updateCarousel();

const carousel = document.getElementById("image-carousel");
const carouselInner = carousel.querySelector(".absolute");
const images = carouselInner.querySelectorAll("img");
let imageIndex = 0;
const intervalTime = 3000; //

function nextImage() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  updateHomeCarousel();
}

function updateHomeCarousel() {
  carouselInner.style.transform = `translateX(-${imageIndex * 100}%)`;
}

setInterval(nextImage, intervalTime);

function onVisible(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}
const observer = new IntersectionObserver(onVisible, { threshold: 50 / 100 });
document.querySelectorAll(".fade-up").forEach((img) => observer.observe(img));

function onVisibleCard(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}
const observerCard = new IntersectionObserver(onVisibleCard, {
  threshold: 0.2,
});
document
  .querySelectorAll(".fade-scale")
  .forEach((card) => observerCard.observe(card));