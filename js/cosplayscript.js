// Cosplay Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get carousel elements
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.cosplay-item');
    const nextButton = document.querySelector('.next-arrow');
    const prevButton = document.querySelector('.prev-arrow');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Function to update carousel position and active states
    function updateCarousel(index) {
        // Remove active class from all items and indicators
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current item and indicator
        items[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Move the track (though items are positioned absolutely via opacity)
        const translateX = -index * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        currentIndex = index;
    }
    
    // Next button functionality
    nextButton.addEventListener('click', function() {
        const nextIndex = (currentIndex + 1) % totalItems;
        updateCarousel(nextIndex);
    });
    
    // Previous button functionality
    prevButton.addEventListener('click', function() {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel(prevIndex);
    });
    
    // Indicator functionality
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            updateCarousel(index);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        }
    });
    
    // Auto-play functionality (optional - uncomment to enable)
    /*
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            nextButton.click();
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
    
    // Pause auto-play when user interacts
    nextButton.addEventListener('click', () => {
        stopAutoPlay();
        setTimeout(startAutoPlay, 10000); // Restart after 10 seconds
    });
    
    prevButton.addEventListener('click', () => {
        stopAutoPlay();
        setTimeout(startAutoPlay, 10000);
    });
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            stopAutoPlay();
            setTimeout(startAutoPlay, 10000);
        });
    });
    */
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    track.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - go to next
                nextButton.click();
            } else {
                // Swiped right - go to previous
                prevButton.click();
            }
        }
    }
    
    // Initialize carousel
    updateCarousel(0);
});