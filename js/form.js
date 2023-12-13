// form.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const resetButton = document.getElementById('reset-button');
    const modalContainer = document.getElementById('modal-container');
    const modalMessage = document.getElementById('modal-message');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateEmail(emailInput.value)) {
            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            // For demonstration purposes, log the form data to the console
            console.log('Form Data:', formDataObject);

            // Show the modal
            showModal();

        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showModal() {
        modalContainer.style.display = 'flex';
    }

    // Close the modal when clicking the close button
    function closeModal() {
        modalContainer.style.display = 'none';
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function (event) {
        if (event.target === modalContainer) {
            closeModal();
        }
    };
});
