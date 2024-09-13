# Job-App-Autofiller

Autofill app for fast and effieciently filling out a job application. User will be given an outline of commonly asked job application questions. Then will be prompted to fill out to save into the database. This app will be coded in JavaScript/React for the front end and backend. It will both be able to be used on mobile and on the web.

# Order of Events

1. Set up HTML Structure:
    - Create form with the necessary fields that need to be filled out (e.g., text inputs, checkboxes, buttons, dropdowns).
    - Assign unique IDs or class names to each form field for essay JS manipulation.
2. Create a JavaScript File:
    - Link the JavaScript file to the HTML document.
    - Write the JavaScript logic to autofill the form fields.
3. Implent Event Listener:
    - Decide when auto-filling should occur (e.g., on page load, on button click).
    - Attach the appropriate event listener to trigger the auto filling function.
4. Write the Autofill Function:
    - Define a function that assigns the pre-determined values to the respective form fields.
    - Use DOM manipulation methods (e.g., 'getElementById', 'querySelector') to access and modify form field values.
5. Handle Different Input Types:
    - Ensure the function correctly handles various input types (e.g., text, radio, checkbox, select).
6. Test the Implementations:
    - Test the form to ensure all fields are correctly auto filled with pre-determined answers.
    - Debug and refine the JavaScript code as necessary.

# Use Cases

UC-1:  Autofill Basic Information
Summary:
The app requests the user's basic information (name, address, phone number, email, LinkedIn URL) and automatically fills this information into a job application form.
Rationale:
To speedup the job application process by reducing the time and effort required to manually input basic information on each job application.
Users:
Job seekers who frequently apply to multiple job positions.
Preconditions:
The user has launched the app.
The user has input their basic information into the app.
The job application interface is compatible with the autofill feature.
Basic Course of Events:
1. The user accesses the job application through the app.
2. The app detects the required fields for basic information on the job application form.
3. The app retrieves the stored basic information from the user’s profile.
4. The app automatically fills in the name, address, phone number, email, and LinkedIn URL into the corresponding fields by the click of a button.
5. The user reviews and submits the job application.
Alternative Paths:
AP-1: If the app cannot detect the fields automatically, the user is prompted to manually map the fields to their corresponding information.
Postconditions:
- The basic information fields on the job application are populated with the user’s data.
- The user successfully submits the job application or continues to fill out the remaining sections.





