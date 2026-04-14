# cs2-form-elements

## Learning Target
I am learning how to create HTML forms and process the data entered into the form

## Success Criteria
- I can use ```<form>```, ```<input>```, and ```<label>``` tags to create an HTML form
- I can use ```inputElement.value``` to get the data entered into and input element
- I can define a function that takes the ```event``` parameter and use ```event.preventDefault()``` to stop the page from reloading

# Essential Notes
## Form HTML tags
- The ```<input>``` tag is used to create input elements such as textboxes, password boxes, checkboxes, date pickers, etc. that are used to create forms
- The type of input is determined by the ```type``` attribute. E.g. ```<input type="text">```
- Common input types are ```text```, ```checkbox```, ```date```, ```password```. See [https://www.w3schools.com/html/html_form_input_types.asp](https://www.w3schools.com/html/html_form_input_types.asp) for a complete list
- Input tags should be given an id to be accessed using ```document.getElementById()``` from your script
- The ```<label for="input-id">``` tag should be used to label input elements
- Input and label elements should be put inside a ```<form>``` element

## Example HTML Form
```html
<form>
    <label for="name">Full Name</label>
    <input type="text" id="name"><br>
    <label for="emailaddress">Email</label>
    <input type="email" id="emailaddress">
    <button onclick="processForm(event)">Submit</button>
</form>
```

## Processing form data with JavaScript
- Define a function to process the form that takes the event parameter e.g. ```processForm(event)```
- Use ```element.value``` to get the data selected by the user, where *element* is a variable containing a form element
- Call ```event.preventDefault()``` to prevent the form submission from reloading the page

## Example form processing function
```javascript
function processForm(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    let nameInput = document.getElementById("name"); // Get the input element
    let name = nameInput.value; // Get the data entered by the user
    console.log(name); // Print the data to the console to test
}
```

# Example
1. Create a form that allows the user to enter their first name, last name, email, and birthdate.
2. Write a function that processes the form and adds a paragraph element containg the information entered by the user

# Practice Exercise
Add a color picker and set the background color of the paragraph elements to the selected color
1. Add an ```<input>``` tag with ```type="color"``` to the form. Be sure to give it an *id* too.
2. Add code to your ```processForm``` function to get the color input and its value
3. Modify the ```addParagraph``` function to take a second parameter e.g. ```addParagraph(text, color)```
4. Set the background color of the paragraph element
