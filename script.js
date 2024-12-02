document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save');
    const autofillButton = document.getElementById('autofill');
    const generateOutlineButton = document.querySelectorAll('.generate-outline');

    // Input fields for each section
    const inputFields = {
        // Section 1: Basic Info
        'resume': 'Basic Info', 'email_address': 'Basic Info', 'phone_number': 'Basic Info', 'first_name': 'Basic Info', 'last_name': 'Basic Info', 
        'address_1': 'Basic Info', 'city': 'Basic Info', 'state': 'Basic Info', 'zip_code': 'Basic Info', 'country': 'Basic Info',
        // Section 2: Education
        'degree': 'Education', 'school': 'Education', 'major': "Education", 'e_start_month': 'Education', 
        'e_start_year': 'Education', 'e_end_month': 'Education', 'e_end_year': 'Education',
        // Section 3: Work History
        'employer': 'Work History', 'job_title': 'Work History', 'location': 'Work History', 
        'wh_start_month': 'Work History', 'wh_start_year': 'Work History', 'wh_end_month': 'Work History', 
        'wh_end_year': 'Work History', 'key_responsibilities': 'Work History',
        // Section 4: Application Questions
        'citizenship': 'Application Questions', 'sponsorship' : 'Application Questions', 'gender': 'Application Questions', 'race': 'Application Questions', 
        'orientation': 'Application Questions', 'disability': 'Application Questions', 'veteran': 'Application Questions',
        // Section 5: Essay Questions
        'essay_1': 'Essay Question/Interview Prep', 'essay_2': 'Essay Question/Interview Prep',
        'essay_3': 'Essay Question/Interview Prep', 'essay_4': 'Essay Question/Interview Prep'
    };


      // Load form data from Chrome storage on page load
      chrome.storage.local.get('formData', ({ formData }) => {
        if (formData) {
            Object.keys(inputFields).forEach(id => {
                const input = document.getElementById(id);
                if(input) {
                    input.value = formData[id] || '';
                }
            });
            console.log('Form data loaded on startup.');
        } else {
            console.log('No saved data found.');
        }
    });

   
   
     // Hardcoded responses for each essay question
     const hardcodedResponses = {
        'essay_1': `Introduction:
"My name is [Your Name], and I am currently a [position, student, etc.] at [institution/company]. Over the years, I have developed a strong interest in [field/industry], which led me to pursue [related studies/experiences]."

Academic and Professional Background:
"I graduated with a degree in [Degree] from [University], where I focused on [specific subjects or skills]. Additionally, I have gained experience in [related field or work experience] through my role at [company/internship], where I was responsible for [tasks or projects]."

Key Skills and Strengths:
"Through my experiences, I have developed strong [skills such as communication, problem-solving, leadership], which I believe will contribute to success in [the role you're applying for]. Specifically, I have demonstrated my ability to [specific accomplishment or skill related to the job]."

Why You Are Interested in This Position:
"I am particularly excited about the opportunity to work at [Company Name] because of its [values, mission, or work culture]. I am eager to apply my skills in [specific area] and contribute to the team’s efforts in [specific company goal or project]."

Conclusion:
"I am excited about the possibility of contributing to [Company Name] and continuing to grow professionally in [industry]. Thank you for considering my application, and I look forward to the opportunity to further discuss how I can be a valuable asset to your team."`,

        'essay_2': `Introduction:

"I am particularly drawn to [Company Name] because of its [specific feature about the company, such as values, mission, or industry leadership]. As someone who values [related personal or professional value], I admire how your team focuses on [specific company focus or initiative]."

Alignment with Career Goals:

"This position aligns perfectly with my career aspirations of [specific career goal or interest]. The opportunity to contribute to [specific project or company initiative] while growing my expertise in [related skill or area] excites me."

Connection to Personal/Professional Experience:

"My background in [specific field/skill] has prepared me to excel in this role. For example, my experience in [specific accomplishment or project] has equipped me to [specific contribution you can bring to the role]. I believe this role would allow me to apply these skills while also learning from [specific company resource or team]."

Long-term Interest in the Company:

"Beyond this role, I am impressed by [long-term aspect of the company, such as growth opportunities, culture, or innovation]. I see [Company Name] as a place where I can make a meaningful impact while continuing to develop professionally."

Conclusion:

"Overall, I am excited about the opportunity to join [Company Name] and contribute to [specific company goal or value]. I look forward to bringing my skills to the team and helping [Company Name] achieve its vision."`,

        'essay_3': `Introduction:

"I believe I am an excellent candidate for this role because of my strong background in [field/industry] and my proven ability to [specific skill or accomplishment]. My passion for [relevant interest or goal] and my commitment to delivering results make me confident in my ability to contribute effectively to [Company Name]."

Relevant Skills and Experiences:

"In my previous role(s) at [company/internship], I successfully [specific task or project], which allowed me to develop expertise in [related skills or achievements]. This experience has prepared me to handle [specific responsibility or challenge of the job]. Additionally, my ability to [additional skill or strength] has consistently enabled me to [outcome or result]."

Alignment with the Role:

"[Company Name]'s focus on [specific value, mission, or project] resonates strongly with me. My skills in [specific area] align directly with the requirements of this position, and I am eager to leverage my strengths in [specific task] to help the team achieve [goal or milestone]."

Unique Value:

"What sets me apart is my [unique quality or approach, e.g., innovative thinking, problem-solving abilities, adaptability]. For example, during [specific scenario], I was able to [specific achievement], which I believe is a testament to my ability to add value in challenging situations."

Conclusion:

"I am confident that my combination of skills, experience, and enthusiasm makes me a strong fit for this position. I am eager to bring my [specific skill or quality] to [Company Name] and help drive the team’s success. Thank you for considering my application, and I look forward to the opportunity to contribute to your team."`,

        'essay_4': `Introduction:

"In my most recent role as a [position] at [company], I encountered several challenges that helped me grow both personally and professionally. One of the most significant challenges was [specific challenge]."

Description of the Challenge:

"The challenge arose when [explain the situation or context of the challenge]. It required [specific skills or qualities needed] to address the issue effectively while maintaining [any relevant considerations like deadlines, quality standards, or team dynamics]."

How You Addressed the Challenge:

"To tackle the issue, I [explain the steps or strategies you implemented]. For example, I [specific action], which helped to [positive result or progress made]. I also collaborated with [team members or departments] to ensure [additional outcome or success factor]."

Outcome:

"As a result of these efforts, [describe the positive outcome, resolution, or impact]. This experience taught me the importance of [specific lesson or skill learned], which I have carried forward into subsequent roles."

Conclusion:

"Overcoming this challenge not only strengthened my [specific skills, such as problem-solving, leadership, or communication] but also reinforced my ability to adapt and persevere under pressure. I am confident that these skills will enable me to contribute effectively to [the prospective role or team]."`
    };

    // Listen for clicks on all generate-outline buttons
    generateOutlineButton.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Generate Outline Button Clicked');
            const targetId = button.getAttribute('data-target');
            console.log('Target ID:', targetId);
            const textarea = document.getElementById(targetId);
            console.log('Textarea:', textarea);

            if (textarea && hardcodedResponses[targetId]) {
                const response = hardcodedResponses[targetId];
                console.log('Using Hardcoded Response:', response);
                textarea.value = response;
            } else {
                console.error('Missing textarea or hardcoded response for:', targetId);
            }
        });
    });

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
            // Temporarily show "Saved!" text
            saveButton.textContent = 'Saved!';
            setTimeout(() => {
                saveButton.textContent = 'Save';
            }, 5000); 
        });
    });

    // Autofill form data on the active tab
    autofillButton.addEventListener('click', () => {
        chrome.storage.local.get('formData', ({ formData }) => {
            if (!formData) {
                console.log('No saved form data found.');
                return;
            }

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (tabs.length === 0) {
                    console.error('No active tab found.');
                    return;
                }

                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'autofill',
                    data: formData
                }, function (response) {
                    if (chrome.runtime.lastError) {
                        console.error('Error sending message:', chrome.runtime.lastError.message);
                    } else {
                        console.log('Autofill message sent:', response);
                    }
                });
            });
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