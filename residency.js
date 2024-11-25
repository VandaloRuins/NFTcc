function showCityInfo(city) {
    const cityInfo = {
        milan: {
            name: "Milan",
            description: "Milan is a global capital of fashion and design."
        },
        naples: {
            name: "Naples",
            description: "Naples is famous for its rich history and delicious pizza."
        },
        rome: {
            name: "Rome",
            description: "Rome, our base of operations, we started producing digital art exhibitions here in 2021 and in 2024 collaborated with Video citta the largest video art fair in Rome. Now we are currently fundraising a physical gallery.",
            videos: [
                "videocitta.mp4",
                "salone colonne.mp4"
            ]
        }
    };
    
    const infoBox = document.getElementById('city-info');
    const cityData = cityInfo[city];
    
    let content = `<h2>${cityData.name}</h2><p>${cityData.description}</p>`;
    
    if (cityData.videos) {
        content += `
            <div class="video-carousel">
                <video id="carouselVideo" src="${cityData.videos[0]}" autoplay muted></video>
            </div>
        `;
    }

    infoBox.innerHTML = content;

    if (cityData.videos) {
        const carouselVideo = document.getElementById('carouselVideo');
        let currentVideoIndex = 0;

        carouselVideo.addEventListener('ended', () => {
            currentVideoIndex = (currentVideoIndex + 1) % cityData.videos.length;
            carouselVideo.src = cityData.videos[currentVideoIndex];
            carouselVideo.play();
        });
    }
}

// Header Fade-out on Scroll for Mobile
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollPosition = 0;
    const header = document.querySelector('header');

    // Check if the screen width is within mobile size (e.g., max-width: 768px)
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

    window.addEventListener('scroll', () => {
        if (!isMobile()) return; // Only execute on mobile

        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
            // User is scrolling down
            header.classList.remove('visible');
            header.classList.add('hidden');
        } else {
            // User is scrolling up
            header.classList.remove('hidden');
            header.classList.add('visible');
        }

        lastScrollPosition = currentScrollPosition;
    });
});

