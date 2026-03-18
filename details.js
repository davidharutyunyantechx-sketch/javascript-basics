// Checkbox toggle 
const checkboxBtns = document.querySelectorAll('.checkbox-btn');

// Checkbox buttons
function setCheckboxSelection(selectedBtn) {
    checkboxBtns.forEach((btn) => {
        const input = btn.querySelector('input[type="checkbox"]');
        const isSelected = btn === selectedBtn;

        btn.classList.toggle('selected', isSelected);
        if (input) input.checked = isSelected;
    });
}

checkboxBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const isCurrentlySelected = btn.classList.contains('selected');

        if (isCurrentlySelected) {
            setCheckboxSelection(null);
        } else {
            setCheckboxSelection(btn);
        }
    });

    const input = btn.querySelector('input[type="checkbox"]');
    if (input) {
        input.addEventListener('change', () => {
            if (input.checked) {
                setCheckboxSelection(btn);
            } else {
                setCheckboxSelection(null);
            }
        });
    }
});

// -Other- section visibility 
const hearAbout = document.getElementById('hearAbout');

hearAbout.addEventListener('change', () => {
    const otherSection = document.getElementById('other-section');
    if (hearAbout.value === 'Other') {
        otherSection.classList.add('visible');
    } else {
        otherSection.classList.remove('visible');
        clearError('otherText');
    }
});

// ======== Helper =========

//  Mark a field as invalid and show its error message
function setError(id, msgId) {
    const el = document.getElementById(id);
    const msg = document.getElementById(msgId);
    el.classList.add('error');
    if (msg) msg.classList.add('visible');
    return el;
}


// Clear error state from a field
function clearError(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('error');
    const msg = document.getElementById(id + 'Err');
    if (msg) msg.classList.remove('visible');
}

// Return the trimmed value of a form field
function val(id) {
    return document.getElementById(id).value.trim();
}

// Validate an email address format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate a phone number 
function isValidPhone(phone) {
    return (
        /^[\d\s\(\)\-\+\.]+$/.test(phone) &&
        /\d{7,}/.test(phone.replace(/\D/g, ''))
    );
}

// =========== Form submission ===========

document.getElementById('submitBtn').addEventListener('click', () => {
    let firstErrorEl = null;

    // Fields that are always required
    const requiredFields = [
        ['firstName', 'firstNameErr'],
        ['lastName', 'lastNameErr'],
        ['street1', 'street1Err'],
        ['city', 'cityErr'],
        ['state', 'stateErr'],
        ['postal', 'postalErr'],
    ];

    // Clear all existing error states before re-validating
    ['firstName', 'lastName', 'street1', 'city', 'state', 'postal',
        'phone', 'email', 'hearAbout', 'otherText'].forEach(clearError);

    // Validate required text fields
    requiredFields.forEach(([id, errId]) => {
        if (!val(id)) {
            const el = setError(id, errId);
            if (!firstErrorEl) firstErrorEl = el;
        }
    });

    // Validate phone 
    const phone = val('phone');
    if (!phone || !isValidPhone(phone)) {
        const el = setError('phone', 'phoneErr');
        if (!firstErrorEl) firstErrorEl = el;
    }

    // Validate email 
    const email = val('email');
    if (email && !isValidEmail(email)) {
        const el = setError('email', 'emailErr');
        if (!firstErrorEl) firstErrorEl = el;
    }

    // Validate "How did you hear about us?" 
    if (!hearAbout.value) {
        const el = setError('hearAbout', 'hearAboutErr');
        if (!firstErrorEl) firstErrorEl = el;
    }

    // Validate "Other" field when "Other" is selected
    if (hearAbout.value === 'Other' && !val('otherText')) {
        const el = setError('otherText', 'otherTextErr');
        if (!firstErrorEl) firstErrorEl = el;
    }

    // If there are errors, scroll to the first one and stop
    if (firstErrorEl) {
        firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // =========== Gather form data ============

    // Recommend value 
    let recommend = null;

    checkboxBtns.forEach((btn) => {
        if (btn.classList.contains('selected')) {
            recommend = btn.querySelector('input').value;
        }
    });

    // References 
    const references = [
        {
            fullName: val('ref1name'),
            address: val('ref1addr'),
            contactNumber: val('ref1contact'),
        },
        {
            fullName: val('ref2name'),
            address: val('ref2addr'),
            contactNumber: val('ref2contact'),
        },
    ];

    const formData = {
        fullName: {
            firstName: val('firstName'),
            lastName: val('lastName'),
        },
        address: {
            street1: val('street1'),
            street2: val('street2'),
            city: val('city'),
            state: val('state'),
            postalCode: val('postal'),
        },
        phoneNumber: phone,
        email: email || null,
        howDidYouHear: hearAbout.value,
        otherSpecification: hearAbout.value === 'Other' ? val('otherText') : null,
        feedback: val('feedback') || null,
        suggestions: val('suggestions') || null,
        willRecommend: recommend,
        references,
    };

    console.log('Form Data:', formData);

    // Show success modal and clear the form
    document.getElementById('successModal').classList.add('visible');
    clearForm();
});

// ========== Modal close ============

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('successModal').classList.remove('visible');
});

// ========== Clear form =============

// Reset all text 
function clearForm() {
    [
        'firstName', 'lastName', 'street1', 'street2', 'city', 'state',
        'postal', 'phone', 'email', 'otherText', 'feedback', 'suggestions',
    ].forEach((id) => {
        document.getElementById(id).value = '';
    });

    // Reset the dropdown
    hearAbout.value = '';
    document.getElementById('other-section').classList.remove('visible');

    // Deselect all checkbox buttons
    checkboxBtns.forEach((b) => b.classList.remove('selected'));

    // Clear reference table inputs
    ['ref1name', 'ref1addr', 'ref1contact', 'ref2name', 'ref2addr', 'ref2contact'].forEach((id) => {
        document.getElementById(id).value = '';
    });
}