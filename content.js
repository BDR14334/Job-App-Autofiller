console.log('Content script loaded!');

// Function to autofill form fields
function autofillForm(data) {
  const fieldMappings = {
    first_name: ['edit-field-job-application-first-name-0-value','firstName-input-id'],
    last_name: ['edit-field-job-application-last-name-0-value'],
    phone_number: ['edit-field-job-application-phone-0-value'],
    email_address: ['edit-field-job-application-email-0-value']
  }; //

  for (const [key, fieldIds] of Object.entries(fieldMappings)) {
    if (data[key]) {
      fieldIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.value = data[key];
          element.dispatchEvent(new Event('input', { bubbles: true }));
          element.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }
  }

  console.log('Autofill completed');
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'autofill') {
    autofillForm(request.data);
    sendResponse({ status: 'Autofill completed' });
  }
});

// Add a button to open the side panel
const sidePanelButton = new DOMParser().parseFromString(
  '<button>Click to open side panel</button>',
  'text/html'
).body.firstElementChild;

sidePanelButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'open_side_panel' });
}); // ask if needed

document.body.append(sidePanelButton);  // Add the button to the page