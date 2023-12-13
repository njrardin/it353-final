const EMPTY_STAR = `images/star-empty-icon.svg`;
const FILLED_STAR = `images/star-full-icon.svg`;

document.addEventListener('DOMContentLoaded', function () {
    const starContainer = document.getElementById('star-container');
    const parentForm = starContainer.closest('form');
    const stars = [];

    // Create an array of star elements
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img');
        star.src = EMPTY_STAR;
        star.alt = 'Star';
        star.dataset.value = i;
        star.addEventListener('mouseover', hoverStar);
        star.addEventListener('click', clickStar);
        star.addEventListener('mouseout', resetStars); // Added mouseout event

        starContainer.appendChild(star);
        stars.push(star);
    }

    // Input field to store the rating value
    const ratingInput = document.createElement('input');
    ratingInput.type = 'hidden';
    ratingInput.name = 'rating'; // Set the appropriate name for the input
    starContainer.appendChild(ratingInput);

    function hoverStar(event) {
        const hoveredValue = event.target.dataset.value;

        // Highlight stars up to the hovered one
        updateStars(hoveredValue);
    }

    function clickStar(event) {
        const clickedValue = event.target.dataset.value;

        // Set the rating value and update the input field
        ratingInput.value = clickedValue;
        updateStars(clickedValue);
    }

    function resetStars() {
        // Reset all stars to their initial state
        const currentRating = ratingInput.value;
        updateStars(currentRating);
    }

    function updateStars(value) {
        // Highlight stars up to the specified value
        stars.forEach(star => {
            const starValue = star.dataset.value;
            star.src = starValue <= value ? FILLED_STAR : EMPTY_STAR;
        });
    }
});
