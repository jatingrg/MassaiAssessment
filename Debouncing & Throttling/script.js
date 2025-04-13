let currentIndex = 0;
const totalImages = 10;
const imageContainer = document.getElementById('image');
const slideNumber = document.getElementById('slideNumber');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let clickTimestamps = [];

function fetchRandomImage() {
    fetch(`https://picsum.photos/600/400?random`)
        .then(response => {
            imageContainer.src = response.url;
            updateSlideNumber();
        })
        .catch(error => console.error('Error fetching image:', error));
}

function updateSlideNumber() {
    slideNumber.textContent = `Slide ${currentIndex + 1} of ${totalImages}`;
}

function throttledNavigate(callback) {
    const currentTime = Date.now();
    clickTimestamps = clickTimestamps.filter(timestamp => currentTime - timestamp < 1000);

    if (clickTimestamps.length >= 3) {
        alert('Chill chill, loading it!!');
        return;
    }

    clickTimestamps.push(currentTime);

    setTimeout(callback, 1000);
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    fetchRandomImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    fetchRandomImage();
}

nextBtn.addEventListener('click', () => throttledNavigate(showNextImage));
prevBtn.addEventListener('click', () => throttledNavigate(showPreviousImage));

fetchRandomImage();
