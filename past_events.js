document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.residency-logo');
    const cityInfo = document.querySelector('.city-info');
    const videoCarousel = document.querySelector('.video-carousel video');
    const yearSelect = document.getElementById('year-select');

    const content = {
        'Rome': {
            '2024': {
                video: 'videocitta.mp4',
                text: 'Rome 2024 - Video Città Event.',
            },
            '2023': {
                video: 'NFTROME1.mp4',
                text: 'Rome 2023 - NFT Rome Event.',
            },
            'salone': {
                video: 'salone colonne.mp4',
                text: 'Rome 2024 - Salone delle Colonne Event.',
            }
        }
        // Add similar data for other cities if needed
    };

    // Handle logo clicks
    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            const city = logo.dataset.city;
            const selectedYear = yearSelect.value;
            const selectedContent = content[city][selectedYear] || content[city]['2024'];

            cityInfo.querySelector('h3').textContent = city.toUpperCase();
            cityInfo.querySelector('p').textContent = selectedContent.text;
            videoCarousel.src = selectedContent.video;
        });
    });

    // Handle year change
    yearSelect.addEventListener('change', () => {
        const selectedYear = yearSelect.value;
        const selectedLogo = document.querySelector('.residency-logo[data-city="Rome"]');
        const city = selectedLogo.dataset.city;
        const selectedContent = content[city][selectedYear] || content[city]['2024'];

        cityInfo.querySelector('h3').textContent = city.toUpperCase();
        cityInfo.querySelector('p').textContent = selectedContent.text;
        videoCarousel.src = selectedContent.video;
    });

    // Set default content for Rome 2024
    cityInfo.querySelector('h3').textContent = 'ROME';
    cityInfo.querySelector('p').textContent = content['Rome']['2024'].text;
    videoCarousel.src = content['Rome']['2024'].video;
});
