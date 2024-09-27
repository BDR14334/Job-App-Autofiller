document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    //const autofillButton = document.getElementById('autofill');

    //const inputFields = ['first_name', 'last_name', 'address_1', 'city', 'state', 'country'];
    // Input fields for each section
    const inputFields = {
        // Section 1: Basic Info
        'first_name': 'Basic Info', 'last_name': 'Basic Info', 'address_1': 'Basic Info', 
        'city': 'Basic Info', 'state': 'Basic Info', 'country': 'Basic Info',
        // Section 2: Education
        'degree': 'Education', 'school': 'Education', 'major': "Education", 'e_start_month': 'Education', 
        'e_start_year': 'Education', 'e_end_month': 'Education', 'e_end_year': 'Education',
        // Section 3: Work History
        'employer': 'Work History', 'job_title': 'Work History', 'location': 'Work History', 
        'wh_start_month': 'Work History', 'wh_start_year': 'Work History', 'wh_end_month': 'Work History', 
        'wh_end_year': 'Work History', 'key_responsibilities': 'Work History'
    };
    
    
    
    // Save form data to Chrome storage
    saveButton.addEventListener('click', () => {
        const formData = {};
        Object.keys(inputFields).forEach(id => {
            const input = document.getElementById(id);
            if(input){
                formData[id] = input.value;
            }
            
        });

        chrome.storage.local.set({ formData }, () => {
            console.log('Form data saved.');
        });
    });

    // Load form data from Chrome storage
    loadButton.addEventListener('click', () => {
        chrome.storage.local.get('formData', ({ formData }) => {
            if (formData) {
                Object.keys(inputFields).forEach(id => {
                    const input = document.getElementById(id);
                    if(input) {
                        input.value = formData[id] || '';
                    }
                    
                });
                console.log('Form data loaded.');
            }
        });
    });

    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    function updateSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active');
            if (i === index) {
                section.classList.add('active');
            }
        });
    }
    
    updateSection(currentIndex);

    document.getElementById('next-arrow').addEventListener('click', () => {
        if (currentIndex < sections.length - 1) {
            currentIndex++;
            updateSection(currentIndex);
        }
    });

    document.getElementById('prev-arrow').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSection(currentIndex);
        }
    });


});