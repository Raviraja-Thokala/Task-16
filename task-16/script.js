document.getElementById('resume').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            autofillForm(text);
        };
        reader.readAsText(file);
    }
});

function autofillForm(resumeText) {
    const namePattern = /Name:\s*(.*)/i;
    const emailPattern = /Email:\s*([\w.-]+@[\w.-]+\.[a-zA-Z]{2,6})/i;
    const phonePattern = /Phone:\s*(\+?\d[\d -]{8,12}\d)/i;

    const nameMatch = resumeText.match(namePattern);
    const emailMatch = resumeText.match(emailPattern);
    const phoneMatch = resumeText.match(phonePattern);

    if (nameMatch) {
        document.getElementById('name').value = nameMatch[1];
    }
    if (emailMatch) {
        document.getElementById('email').value = emailMatch[1];
    }
    if (phoneMatch) {
        document.getElementById('phone').value = phoneMatch[1];
    }
}

