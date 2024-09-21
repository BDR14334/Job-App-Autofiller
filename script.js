document.addEventListener('DOMContentLoaded', function() {
    const exitButton = document.getElementById('exit');
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    //const autofillButton = document.getElementById('autofill');

    const inputFields = ['first_name', 'last_name', 'address_1', 'city', 'state', 'country'];

    // Save form data to Chrome storage
    saveButton.addEventListener('click', () => {
        const formData = {};
        inputFields.forEach(id => {
            const input = document.getElementById(id);
            formData[id] = input.value;
        });

        chrome.storage.local.set({ formData }, () => {
            console.log('Form data saved.');
        });
    });

    // Load form data from Chrome storage
    loadButton.addEventListener('click', () => {
        chrome.storage.local.get('formData', ({ formData }) => {
            if (formData) {
                inputFields.forEach(id => {
                    const input = document.getElementById(id);
                    input.value = formData[id] || '';
                });
                console.log('Form data loaded.');
            }
        });
    });

});