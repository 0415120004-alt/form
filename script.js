function processForm(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    
    // Get all the input elements
    let firstnameInput = document.getElementById("firstname");
    let lastnameInput = document.getElementById("lastname");
    let emailInput = document.getElementById("emailaddress");
    let birthdateInput = document.getElementById("birthdate");
    
    // Get the values entered by the user
    let firstname = firstnameInput.value;
    let lastname = lastnameInput.value;
    let email = emailInput.value;
    let birthdate = birthdateInput.value;
    
    // Create a message with the information
    let message = `Name: ${firstname} ${lastname}, Email: ${email}, Birthdate: ${birthdate}`;
    
    // Add the information as a paragraph
    addParagraph(message);
    
    // Clear the form
    document.querySelector("form").reset();
}

function addParagraph(text) {
    let p = document.createElement("p");
    p.textContent = text;
    document.getElementById("output").appendChild(p);
}