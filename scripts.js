let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const videos = document.querySelectorAll('.carousel-item video');

function initCarousel() {
    console.log('Initializing carousel');
    videos.forEach((video, index) => {
        console.log(`Setting up video ${index + 1}`);
        video.removeAttribute('autoplay');
        video.removeAttribute('loop');
        video.addEventListener('ended', () => {
            moveCarousel(1);
        });
    });
    playCurrentVideo();
}

function moveCarousel(direction) {
    console.log(`Moving carousel in direction: ${direction}`);
    items[currentIndex].classList.remove('active');
    videos[currentIndex].pause();
    currentIndex = (currentIndex + direction + items.length) % items.length;
    console.log(`New currentIndex: ${currentIndex}`);
    items[currentIndex].classList.add('active');
    playCurrentVideo();
}

function playCurrentVideo() {
    const currentVideo = videos[currentIndex];
    console.log(`Playing video at index: ${currentIndex}`);
    currentVideo.muted = true;
    if (currentVideo.readyState >= 2) {
        console.log('Video is ready to play');
        currentVideo.play().then(() => {
            console.log('Video playback started');
        }).catch(error => {
            console.error('Error playing video:', error);
        });
    } else {
        console.log('Waiting for video to be ready');
        currentVideo.addEventListener('canplay', () => {
            console.log('Video is now ready');
            currentVideo.play().then(() => {
                console.log('Video playback started');
            }).catch(error => {
                console.error('Error playing video:', error);
            });
        }, { once: true });
    }
}

// JavaScript to handle modal windows

function openModal(city) {
    document.getElementById(`modal-${city}`).style.display = "block";
}

function closeModal(city) {
    document.getElementById(`modal-${city}`).style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modals = ['miami', 'milan', 'naples', 'rome'];
    modals.forEach(city => {
        const modal = document.getElementById(`modal-${city}`);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

// JavaScript to handle city info updates
function showCityInfo(city) {
    const cityInfo = {
        miami: "Miami",
        milan: "Milan",
        naples: "Naples",
        rome: "Rome"
    };
    document.getElementById('city-info').innerText = cityInfo[city];
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) { // Only initialize carousel on non-mobile devices
        initCarousel();
    } else {
        console.log('Carousel disabled on mobile');
    }
});
   
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();

    
});
