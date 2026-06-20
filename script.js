function validateForm() {
    // Correctly fetch elements via the document forms API
    let name = document.forms["contactForm"]["name"].value.trim();
    let email = document.forms["contactForm"]["email"].value.trim();

    // Check if inputs are missing/blank
    if (name === "" || email === "") {
        alert("Name and Email must be filled out!");
        return false; // Blocks form from executing submission
    }

    alert("Thank you! Your message has been sent successfully.");
    return true; 
}