// Get form elements
const form = document.getElementById('patientForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const contactInput = document.getElementById('contact');
const emailInput = document.getElementById('email');
const bloodGroupInput = document.getElementById('bloodGroup');

const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');
const contactError = document.getElementById('contactError');
const emailError = document.getElementById('emailError');
const bloodGroupError = document.getElementById('bloodGroupError');
const successMessage = document.getElementById('successMessage');

// Validation Rules
const validationRules = {
    name: {
        validate: (value) => {
            value = value.trim();
            if (value.length === 0) {
                return 'Name is required';
            }
            if (value.length < 3) {
                return 'Name must be at least 3 characters long';
            }
            if (!/^[a-zA-Z\s]+$/.test(value)) {
                return 'Name can only contain letters and spaces';
            }
            return '';
        },
        element: nameError
    },
    age: {
        validate: (value) => {
            if (value === '' || value === null) {
                return 'Age is required';
            }
            const age = parseInt(value);
            if (isNaN(age)) {
                return 'Age must be a valid number';
            }
            if (age < 1 || age > 150) {
                return 'Age must be between 1 and 150';
            }
            return '';
        },
        element: ageError
    },
    contact: {
        validate: (value) => {
            const phoneRegex = /^[0-9]{10}$/;
            if (value.trim().length === 0) {
                return 'Contact number is required';
            }
            if (!/^\d+$/.test(value)) {
                return 'Contact number must contain only digits';
            }
            if (!phoneRegex.test(value)) {
                return 'Contact number must be exactly 10 digits';
            }
            return '';
        },
        element: contactError
    },
    email: {
        validate: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.trim().length === 0) {
                return 'Email is required';
            }
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
            return '';
        },
        element: emailError
    },
    bloodGroup: {
        validate: (value) => {
            if (value === '' || value === null) {
                return 'Blood group is required';
            }
            const validGroups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
            if (!validGroups.includes(value)) {
                return 'Please select a valid blood group';
            }
            return '';
        },
        element: bloodGroupError
    }
};

// Real-time validation
nameInput.addEventListener('blur', () => validateField('name'));
ageInput.addEventListener('blur', () => validateField('age'));
contactInput.addEventListener('blur', () => validateField('contact'));
emailInput.addEventListener('blur', () => validateField('email'));

// Optional: Validate on input for better UX
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 0) {
        validateField('name');
    }
});

ageInput.addEventListener('input', () => {
    if (ageInput.value.length > 0) {
        validateField('age');
    }
});

contactInput.addEventListener('input', () => {
    if (contactInput.value.length > 0) {
        validateField('contact');
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim().length > 0) {
        validateField('email');
    }
});

bloodGroupInput.addEventListener('change', () => validateField('bloodGroup'));

// Validate individual field
function validateField(fieldName) {
    const rule = validationRules[fieldName];
    const input = form.elements[fieldName];
    const error = rule.validate(input.value);

    if (error) {
        rule.element.textContent = error;
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else {
        rule.element.textContent = '';
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
}

// Validate all fields
function validateAllFields() {
    let isValid = true;
    
    for (const fieldName in validationRules) {
        if (!validateField(fieldName)) {
            isValid = false;
        }
    }
    
    return isValid;
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous success message
    successMessage.classList.remove('show');
    successMessage.textContent = '';

    // Validate all fields
    if (validateAllFields()) {
        // Get form data
        const formData = {
            name: nameInput.value.trim(),
            age: ageInput.value,
            contact: contactInput.value,
            email: emailInput.value.trim(),
            bloodGroup: bloodGroupInput.value
        };

        // Display success message
        successMessage.textContent = `✓ Registration successful! Welcome, ${formData.name}. Blood Group: ${formData.bloodGroup}. We will contact you at ${formData.contact}.`;
        successMessage.classList.add('show');

        // Log data (in real application, this would be sent to a server)
        console.log('Patient Registration Data:', formData);

        // Optional: Reset form after successful submission
        // Uncomment the line below if you want to clear the form after registration
        // form.reset();
        // Clear error messages
        nameError.textContent = '';
        ageError.textContent = '';
        contactError.textContent = '';
        emailError.textContent = '';
        bloodGroupError.textContent = '';
    } else {
        // Scroll to first error
        const firstErrorField = form.querySelector('input.invalid');
        if (firstErrorField) {
            firstErrorField.focus();
            firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Clear error message when user starts typing
form.addEventListener('reset', () => {
    // Reset error messages
    nameError.textContent = '';
    ageError.textContent = '';
    contactError.textContent = '';
    emailError.textContent = '';
    bloodGroupError.textContent = '';
    successMessage.classList.remove('show');
    
    // Remove validation classes
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
});
