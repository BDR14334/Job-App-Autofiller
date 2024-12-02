# Job-App-Autofiller

This Chrome extension is designed to simplify the process of applying for jobs by automatically filling out job application forms with user-provided data. The extension will store user information, such as basic details, resumes, education history, employment history, and responses to common essay questions. It will also offer functionalities to save, load, autofill, and exit the extension. The extension targets users who frequently apply for jobs online and are looking to streamline the application process.

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

## UC-2: Autofill Education History

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
2. The app detects the fields for education history (school name, location, major, year graduated).  
3. The app retrieves the stored education history from the user’s profile.  
4. The app automatically fills in the education details on the job application form by the click of a button.  
5. The user reviews and submits the job application.

**Alternative Paths:**  
- **AP-1**: If the user’s education history is incomplete, the app prompts the user to fill in the missing information.  
- **AP-2**: If multiple entries are stored, the app allows the user to select which education history to apply.

**Postconditions:**  
- The education history fields on the job application are populated with the user’s data.  
- The user successfully submits the job application.


## UC-3: Autofill Employment History

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


## UC-4: Autofill Common Short Essay Questions

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


## UC-5: Save Button

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


## UC-6: Autofill Button

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


## UC-7: Manage Autofill App with Chrome Side Panel

**Summary:**
The user can manage the visibility of the Chrome extension’s interface using the native Side Panel API. The side panel allows the user to access the autofill app while browsing, without interfering with the job application workflow.

**Rationale:**
To provide a smooth user experience where the extension remains accessible within Chrome’s side panel, offering a more integrated approach compared to a separate sidebar within a web page.

**Users:**
Job seekers who use the Chrome extension to autofill job application forms online.

**Preconditions:**
- The user has installed the Chrome extension and has access to Chrome’s side panel.
- The user is browsing a job application form.

**Basic Course of Events:**
1. The user opens the Chrome side panel using the extension’s icon from the browser toolbar.
2. The side panel opens, displaying the autofill form interface inside the Chrome side panel.
3. The user interacts with the autofill form (e.g., entering or loading saved information).
4. The user can close or reopen the panel at any time using Chrome’s side panel management options.

**Alternative Paths:**
- **AP-1:** If the side panel is minimized or hidden, the user can reopen it via the extension's icon from the Chrome toolbar.
- **AP-2:** The user may configure Chrome’s side panel to auto-hide based on their preferences.

**Postconditions:**
- The autofill interface is accessible inside Chrome’s side panel.
- The user can fill in forms without leaving the current webpage or exiting the panel.

## Generate Outline for Essay Questions 

**Summary**
This feature allows users to generate pre-written outlines for common essay questions by clicking a "Generate Outline" button. The outlines are hardcoded in the extension and tailored to typical job application or interview questions. Once generated, the outline is populated directly into the corresponding input field for the user to review and edit.

**Rationale**
The goal is to provide job seekers with quick, structured responses to common essay questions, helping them save time and effort while preparing personalized answers.

**Users**
- Job seekers preparing essay-style responses for job applications or interviews.

**Preconditions**
- The Chrome extension is installed and functional.
- The user is on the extension interface where essay question fields are present.
- Hardcoded outlines are mapped to essay question IDs.

**Basic Course of Events**
1. The user navigates to the essay preparation section of the extension interface.
2. The user clicks the "Generate Outline" button next to an essay question field.
3. The extension retrieves the hardcoded outline corresponding to the essay question ID.
4. The hardcoded outline is populated into the relevant input field for the user to review.

**Alternative Paths**
- **AP-1:** If the corresponding hardcoded response is missing for a question, the extension logs an error message and leaves the input field unchanged.
- **AP-2:** The user can manually edit the pre-filled outline to further customize their response.

**Postconditions**
- The essay input field is populated with a pre-written outline.
- Users can modify or use the outline as is.
