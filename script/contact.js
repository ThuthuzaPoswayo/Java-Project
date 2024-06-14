document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);


    const formDataObject = {};            //creating object from data in forms
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Simulate sending data to server (replace with your backend logic)
    setTimeout(() => {
        // Display response
        document.getElementById('response').textContent = 'Message sent successfully!';
        // Clear form
        document.getElementById('contact-form').reset();
    }, 1000); // Simulate 1 second delay
});
