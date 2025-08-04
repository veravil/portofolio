
let currentImages = [];
let currentIndex = 0;

// Scroll animation
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));

// Modal functions
function openModal(title, images, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;
    currentImages = images;
    currentIndex = 0;
    document.getElementById('modal-image').src = currentImages[currentIndex];
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal').classList.add('flex');
}
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('flex');
}
function nextImage() {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        document.getElementById('modal-image').src = currentImages[currentIndex];
    }
}
function prevImage() {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        document.getElementById('modal-image').src = currentImages[currentIndex];
    }
}

