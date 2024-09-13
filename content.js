document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('formData', ({ formData }) => {
        if (formData) {
            autofillForm(formData);
        }
    });
});