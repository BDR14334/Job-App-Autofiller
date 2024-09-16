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

## UC-1: Autofill Basic Information

**Summary:** 
The app requests the user's basic information (name, address, phone number, email, LinkedIn URL) and automatically fills this information into a job application form.

**Rationale:** 
To speed up the job application process by reducing the time and effort required to manually input basic information on each job application.

**Users:** 
Job seekers who frequently apply to multiple job positions.

**Preconditions:**
- The user has launched the app.
- The user has input their basic information into the app.
- The job application interface is compatible with the autofill feature.

**Basic Course of Events:**
1. The user accesses the job application through the app.
2. The app detects the required fields for basic information on the job application form.
3. The app retrieves the stored basic information from the user’s profile.
4. The app automatically fills in the name, address, phone number, email, and LinkedIn URL into the corresponding fields by the click of a button.
5. The user reviews and submits the job application.

**Alternative Paths**
- **AP-1**: If the app cannot detect the fields automatically, the user is prompted to manually map the fields to their corresponding information.

**Postconditions**
- The basic information fields on the job application are populated with the user’s data.
- The user successfully submits the job application or continues to fill out the remaining sections.

Here are the use cases formatted for your README.md file with proper markdown syntax:

## UC-2: Attach Resume

**Summary:**  
The app requests and stores the user's resume, allowing it to automatically attach the resume to job applications.

**Rationale:**  
To ensure that a copy of the user's resume can be quickly uploaded to job applications.

**Users:**  
Job seekers who need to attach a resume to multiple job applications.

**Preconditions:**  
- The user has uploaded a resume to the app.  
- The job application requires a resume attachment.

**Basic Course of Events:**  
1. The user accesses the job application through the app.  
2. The app detects the requirement for a resume attachment.  
3. The app retrieves the stored resume from the user’s profile.  
4. The app automatically attaches the resume to the job application by the click of a button.  
5. The user reviews the attachment and submits the job application.

**Alternative Paths:**  
- **AP-1**: If the user has not uploaded a resume, the app prompts the user to do so before continuing.  
- **AP-2**: If multiple resumes are stored, the app allows the user to select which resume to attach.

**Postconditions:**  
- The resume is attached to the job application.  
- The user successfully submits the job application.


## UC-3: Autofill Education History

**Summary:**  
The app requests and stores the user's education history and automatically fills in the relevant sections of a job application.

**Rationale:**  
To simplify the job application process by automatically inputting the user's detailed education history.

**Users:**  
Job seekers with educational qualifications required for job applications.

**Preconditions:**  
- The user has inputted their education history into the app.  
- The job application includes fields for education history.

**Basic Course of Events:**  
1. The user accesses the job application through the app.  
2. The app detects the fields for education history (school name, location, major, year graduated, GPA).  
3. The app retrieves the stored education history from the user’s profile.  
4. The app automatically fills in the education details on the job application form by the click of a button.  
5. The user reviews and submits the job application.

**Alternative Paths:**  
- **AP-1**: If the user’s education history is incomplete, the app prompts the user to fill in the missing information.  
- **AP-2**: If multiple entries are stored, the app allows the user to select which education history to apply.

**Postconditions:**  
- The education history fields on the job application are populated with the user’s data.  
- The user successfully submits the job application.


## UC-4: Autofill Employment History

**Summary:**  
The app requests and stores the user's employment history and automatically fills in the relevant sections of a job application.

**Rationale:**  
To reduce the time spent on filling out detailed employment history for job applications, while ensuring consistency and accuracy.

**Users:**  
Job seekers with previous work experience relevant to job applications.

**Preconditions:**  
- The user has inputted their employment history into the app.  
- The job application includes fields for employment history.

**Basic Course of Events:**  
1. The user accesses the job application through the app.  
2. The app detects the fields for employment history.  
3. The app retrieves the stored employment history from the user’s profile.  
4. The app automatically fills in the employment details on the job application form by the click of a button.  
5. The user reviews and submits the job application.

**Alternative Paths:**  
- **AP-1**: If the user’s employment history is incomplete, the app prompts the user to fill in the missing information.  
- **AP-2**: If multiple entries are stored, the app allows the user to select which employment history to apply.

**Postconditions:**  
- The employment history fields on the job application are populated with the user’s data.  
- The user successfully submits the job application.


## UC-5: Autofill Common Short Essay Questions

**Summary:**  
The app stores and manages common short essay answers provided by the user and automatically fills them into job applications that request such essays.

**Rationale:**  
To save time and ensure consistent responses to common essay questions across multiple job applications.

**Users:**  
Job seekers who frequently encounter similar short essay questions in job applications.

**Preconditions:**  
- The user has inputted or selected answers to common short essay questions.  
- The job application includes fields for short essay responses.

**Basic Course of Events:**  
1. The user accesses the job application through the app.  
2. The app detects the fields for short essay questions.  
3. The app retrieves the stored short essay answers from the user’s profile.  
4. The app automatically fills in the short essay responses on the job application form.  
5. The user reviews and submits the job application.

**Alternative Paths:**  
- **AP-1**: If multiple answers are stored for similar questions, the app allows the user to select which answer to use.

**Postconditions:**  
- The short essay fields on the job application are populated with the user’s data.  
- The user successfully submits the job application.


## UC-6: Save Button

**Summary:**                                                                                                              
The Save Button allows the user to save the data they have entered into the app's database for future use.

**Rationale:**                                                                                                            
To ensure that the user's data is securely stored and can be accessed later, reducing the need to re-enter information.

**Users:**                                                                                                                
Job seekers using the app to manage and store their job application information.

**Preconditions:**  
- The user has entered data into the app (e.g., basic information, resume, education history, etc.).  
- The app is connected to the database.

**Basic Course of Events:**  
1. The user completes entering their data into the app.  
2. The user clicks the Save Button.  
3. The app validates the entered data.  
4. The app saves the data to the database.  
5. A confirmation message is displayed to the user indicating that the data has been successfully saved.

**Alternative Paths:**  
- **AP-1**: If the database connection fails, the app displays an error message and prompts the user to try saving again.  
- **AP-2**: If validation fails, the app highlights the fields with errors and prompts the user to correct them before saving.

**Postconditions:**  
- The user’s data is saved in the database.  
- The user is notified of the successful save or any errors that occurred.


## UC-7: Load Button

**Summary:**  
The Load Button allows the user to load previously saved data from the database into the app for editing or use in a job application.

**Rationale:**  
To enable the user to quickly access and modify their previously saved information, making it easier to update and use in new job applications.

**Users:**  
Job seekers who have previously saved data in the app's database.

**Preconditions:**  
- The user has saved data in the app's database.  
- The app is connected to the database.

**Basic Course of Events:**  
1. The user clicks the Load Button.  
2. The app retrieves the saved data from the database.  
3. The app populates the data fields with the loaded information.  
4. The user reviews and, if necessary, edits the loaded data.

**Alternative Paths:**  
- **AP-1**: If no data is found, the app displays a message indicating that there is no saved data available.  
- **AP-2**: If the database connection fails, the app displays an error message and prompts the user to try loading again.

**Postconditions:**  
- The saved data is loaded into the app for the user to review or edit.  
- The user is notified if the load was successful or if any issues occurred.


## UC-8: Autofill Button

**Summary:**  
The Autofill Button allows the user to automatically fill in the job application form with the data stored in the app.

**Rationale:**  
To speed up the job application process by automatically filling out forms, reducing manual entry and saving time.

**Users:**  
Job seekers who want to use their stored information to apply for jobs efficiently.

**Preconditions:**  
- The user has saved data in the app’s database.  
- The user is on a job application form that is compatible with the autofill feature.

**Basic Course of Events:**  
1. The user accesses a job application form.  
2. The user clicks the Autofill Button.  
3. The app detects the required fields on the job application form.  
4. The app retrieves the corresponding data from the database.  
5. The app automatically fills in the job application form with the stored data.  
6. The user reviews the autofilled information and submits the application.

**Alternative Paths:**  
- **AP-1**: If the app cannot detect the fields correctly, the user is prompted to manually map the fields.  
- **AP-2**: If any required data is missing, the app prompts the user to enter the missing information before autofilling.

**Postconditions:**  
- The job application form is populated with the user’s data.  
- The user submits the job application or edits the information as needed.


## UC-9: Toggle Sidebar In and Out with Arrow Button

**Summary:**  
The Toggle Sidebar with Arrow Button allows the user to slide the Chrome extension’s sidebar interface in and out of view, providing an easy way to manage the app's visibility while browsing.

**Rationale:**  
To provide a seamless and intuitive user experience where the extension remains easily accessible, without requiring the user to fully close or exit the app interface.

**Users:**  
Job seekers who use the Chrome extension while applying for jobs online.

**Preconditions:**  
- The user has opened the Chrome extension while on a job application form.  
- The sidebar is visible on the screen.

**Basic Course of Events:**  
1. The user clicks the Arrow Button on the sidebar.  
2. The sidebar slides out of view, minimizing the app's interface.  
3. The user clicks the Arrow Button again.  
4. The sidebar slides back into view, maximizing the app's interface.

**Alternative Paths:**  
- **AP-1**: If the app is minimized, the user can access the Arrow Button from the toolbar.  
- **AP-2**: If the sidebar is collapsed, the user may have an option to configure its behavior to auto-hide after a period of inactivity.

**Postconditions:**  
- The sidebar is toggled in or out of view based on the user's actions.  
- The user can continue to use the Chrome extension without disruption.

