chrome.storage.sync.get('formData', ({ formData }) => {
    for (const [key, value] of Object.entries(formData)) {
        const field = document.querySelector(`[id="${key}"], [name="${key}"]`);
        if (field) {
            field.value = value;
            field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
});