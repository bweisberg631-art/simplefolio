

window.openLightbox = function(element) {
const img = element.querySelector('img');
const caption = element.querySelector('.gallery-caption');

document.getElementById('lightbox-img').src = img.src;
document.getElementById('lightbox-caption').textContent = caption ? caption.textContent : '';
document.getElementById('lightbox').classList.add('active');

const allItems = document.querySelectorAll('.gallery-item');
window.images = Array.from(allItems).map(item => ({
    src: item.querySelector('img').src,
    caption: item.querySelector('.gallery-caption') ? item.querySelector('.gallery-caption').textContent : ''
}));

window.current = Array.from(allItems).indexOf(element);
}

window.changeImage = function(direction) {
window.current = (window.current + direction + window.images.length) % window.images.length;
document.getElementById('lightbox-img').src = window.images[window.current].src;
document.getElementById('lightbox-caption').textContent = window.images[window.current].caption;
}

function closeLightbox() {
document.getElementById('lightbox').classList.remove('active');
}

// close on background click
document.getElementById('lightbox').addEventListener('click', function(e) {
if (e.target === this) closeLightbox();
});

// close on escape key
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') closeLightbox();
if (e.key === 'ArrowLeft') changeImage(-1);
if (e.key === 'ArrowRight') changeImage(1);
});

function toggleMore() {
const more = document.getElementById('webMore');
const btn = document.getElementById('webMoreBtn');
if (more.hidden) {
    more.hidden = false;
    btn.innerHTML = 'Show Less <i class="fa fa-chevron-up"></i>';
} else {
    more.hidden = true;
    btn.innerHTML = 'View More <i class="fa fa-chevron-down"></i>';
}
}