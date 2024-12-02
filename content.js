console.log('Content script loaded!');

function getLabelTextForInput(inputId) {
  const label = document.querySelector(`label[for='${inputId}']`);
  return label ? label.textContent.trim() : '';
}

// Function to find the input field based on label text
function findFieldByLabel(labelText) {
  const labels = Array.from(document.querySelectorAll('label'));

  // Look for a label that matches the text we're searching for
  const matchingLabel = labels.find(label =>
    new RegExp(labelText, 'i').test(label.textContent)
  );

  // If we found a matching label, find its associated input
  if(matchingLabel) {
    const inputId = matchingLabel.getAttribute('for');
    return inputId ? document.getElementById(inputId) : matchingLabel.querySelector('input');
  }
  return null;
}

function autofillInputById(inputId, value) {
  // Locate the input field by ID
  const inputField = document.getElementById(inputId);

  if (inputField) {
    // Set focus on the input field
    inputField.focus();

    // Set the value of the input field
    inputField.value = value;

    // Trigger events to simulate user input and notify JavaScript frameworks
    inputField.dispatchEvent(new Event('input', { bubbles: true })); // Triggers input event
    inputField.dispatchEvent(new Event('change', { bubbles: true })); // Triggers change event

    console.log(`Autofilled "${value}" into field with ID "${inputId}".`);
  } else {
    console.log(`Input field with ID "${inputId}" not found.`);
  }
}

// Function to dynamically select dropdown options
async function selectDropdownOption(labelText, value) {
  try {
    // Locate the label associated with the dropdown
    const label = Array.from(document.querySelectorAll('label')).find((lbl) =>
      lbl.textContent.trim().includes(labelText)
    );
    if (!label) throw new Error(`Label with text "${labelText}" not found.`);

    // Try to find a standard dropdown
    const dropdownButton = label?.parentElement.querySelector('button[aria-haspopup="listbox"]');
    if (dropdownButton) {
      dropdownButton.click(); // Open dropdown
      await waitForOptions();

      const matchingOption = findOption(value);
      if (!matchingOption) throw new Error(`Option "${value}" not found for "${labelText}".`);

      matchingOption.click(); // Select option
      console.log(`Selected "${value}" for dropdown "${labelText}".`);
      return;
    }

    // Try to find a multi-select dropdown
    const multiSelectContainer = label?.parentElement.querySelector('[data-uxi-widget-type="multiselect"]');
    if (multiSelectContainer) {
      const inputField = multiSelectContainer.querySelector('input[placeholder="Search"]');
      if (!inputField) throw new Error(`Input field not found for multi-select "${labelText}".`);

      inputField.focus();
      inputField.value = value;
      inputField.dispatchEvent(new Event('input', { bubbles: true })); // Simulate typing
      await waitForOptions();

      const matchingOption = findOption(value);
      if (!matchingOption) throw new Error(`Option "${value}" not found for "${labelText}".`);

      matchingOption.click(); // Select option
      console.log(`Selected "${value}" for multi-select "${labelText}".`);
      return;
    }

    throw new Error(`No dropdown found for "${labelText}".`);
  } catch (error) {
    console.error(error.message);
  }
}

// Helper to wait for dropdown options to load
function waitForOptions() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

// Helper to find matching option
function findOption(value) {
  return Array.from(document.querySelectorAll('ul[role="listbox"] li')).find((option) =>
    option.textContent.trim().toLowerCase().includes(value.toLowerCase())
  );
}

// Function to autofill date fields with month and year input sections
function autofillDateField(month, year, labelText) {
  const label = Array.from(document.querySelectorAll('label')).find(lbl => 
    lbl.textContent.includes(labelText)
  );

  if (label) {
    // Locate the container holding the month and year fields
    const dateContainer = label.closest('div').querySelector('div[role="group"]');

    if (dateContainer) {
      // Dynamically find the month and year input elements
      const monthInput = Array.from(dateContainer.querySelectorAll('input')).find(input =>
        input.getAttribute('aria-label') === 'Month'
      );
      const yearInput = Array.from(dateContainer.querySelectorAll('input')).find(input =>
        input.getAttribute('aria-label') === 'Year'
      );

      if (monthInput || yearInput) {
        if (month && monthInput) {
          monthInput.value = month;
          monthInput.dispatchEvent(new Event('input', { bubbles: true }));
          monthInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        
        if (year && yearInput) {
          yearInput.value = year;
          yearInput.dispatchEvent(new Event('input', { bubbles: true }));
          yearInput.dispatchEvent(new Event('change', { bubbles: true }));
        }

        console.log(`Filled ${labelText} with ${month || ''}/${year || ''}`);
      } else {
        console.warn(`Month or year input not found for ${labelText}`);
      }
    } else {
      console.warn(`Date container not found for label: ${labelText}`);
    }
  }
}

// Function to autofill textarea fields
function autofillTextField(text, labelText) {
  // Find the label by matching its text content
  const label = Array.from(document.querySelectorAll('label')).find(lbl => 
    new RegExp(labelText, 'i').test(lbl.textContent)
  );

  if (label) {
    // Find the associated textarea
    const inputId = label.getAttribute('for');
    let textArea = inputId ? document.getElementById(inputId) : null;

    // If textarea is not found by ID, search within the container
    if (!textArea) {
      textArea = label.closest('div').querySelector('textarea');
    }

    // Ensure the textarea was found and filled
    if (textArea) {
      // Debugging check if the textarea can be modified
      console.log(`Found textarea for label "${labelText}":`, textArea);

      // Focus and fill the textarea
      textArea.focus();
      textArea.value = text;
      textArea.dispatchEvent(new Event('input', { bubbles: true }));
      textArea.dispatchEvent(new Event('change', { bubbles: true }));

      console.log(`Filled textarea for label: "${labelText}" with text: "${text}"`);
    } else {
      console.warn(`Textarea not found for label: "${labelText}"`);
    }
  } else {
    console.warn(`Label not found for text: "${labelText}"`);
  }
}

// Function to autofill form fields
async function autofillForm(data) {
  const fieldMappings = {
    // Basic Info
    first_name: "First Name",
    last_name: "Last Name",
    phone_number: "Phone Number",
    email_address: "Email",
    address_1: "Address",
    city: "City",
    zip_code: "Postal Code",
    state: "State",
    country: "Country",
    
    // Work History
    employer: "Company",
    job_title: "Job Title",
    location: "Location",
    wh_start_year:"From",
    wh_start_month:"From",
    wh_end_year:"To",
    wh_end_month: "To",
    key_responsibilities: "Role Description",

    // Education
    school: "School",
    degree: "Degree",
    major: "Field of Study",
    e_start_year: "From",  
    e_end_year: "To",      
    e_start_month: "From", 
    e_end_month: "To",
    
    // Application Questions
    citizenship: "Are you legally authorized to work in the country where this role is located?",
    sponsorship: "sponsorship",
    gender: "gender",
    race: "race",
    //orientation: "",
    disability: "disablility",
    veteran: "veteran",
    essay_2: "why"
  }; //

  // Define dropdown fields 
  const dropdownFields = [
    'state', 'country', 'degree', 'major', 'gender', 'race', 
    'citizenship', 'sponsorship'
  ];

  // Define date fields
  const dateFields = [
    'wh_start_month', 'wh_start_year', 'wh_end_month', 'wh_end_year',
    'e_start_month', 'e_start_year', 'e_end_month', 'e_end_year'
  ];

  for (const [key, labelText] of Object.entries(fieldMappings)) {
    if (data[key]) {
      if (dropdownFields.includes(key)) {
        // Use the custom dropdown selector function for these fields
        await selectDropdownOption(labelText, data[key]);
      } else if (dateFields.includes(key)) {
        // call autofillDateField with grouped month/year values
        if (key.startsWith('wh')) {
          autofillDateField(data.wh_start_month, data.wh_start_year, "From");
          autofillDateField(data.wh_end_month, data.wh_end_year, "To");
        } else if (key.startsWith('e')) {
          autofillDateField(data.e_start_month, data.e_start_year, "From");
          autofillDateField(data.e_end_month, data.e_end_year, "To");
        }
      } else if (key === 'key_responsibilities') {
        // Autofill the Role Description field
        autofillTextField(data[key], labelText);
      } else {
        // Check for an element by ID
        if (document.getElementById(key)) {
          autofillInputById(key, data[key]);
        } else {
          // Fallback to label-based approach
          let element = findFieldByLabel(labelText);
          if (element) {
            element.value = data[key];
            element.dispatchEvent(new Event("input", { bubbles: true }));
            element.dispatchEvent(new Event("change", { bubbles: true }));
          } else {
            console.log(`Could not find field for ${labelText}`);
          }
        }
      }
    }
  }

  console.log("Autofill completed");
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'autofill') {
    autofillForm(request.data);
    sendResponse({ status: 'Autofill completed' });
  }
});

sidePanelButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'open_side_panel' });
})

document.body.append(sidePanelButton);  