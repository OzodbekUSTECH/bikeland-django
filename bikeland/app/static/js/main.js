// navbar

let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let headerBottomLinks = document.querySelectorAll('#header__bottom-link')
burger.addEventListener('click', () => {
    nav.classList.toggle('active')

})

headerBottomLinks.forEach(el => {
    el.addEventListener('click', () => {
        nav.classList.remove('active')
    })
})

// callPopup
let callPopup = document.querySelector('.call__popup');
let callButton = document.querySelector('.call__sticky');
let callingButton = document.querySelector('.call__button')
let callInput = document.querySelector('.call__button')

callButton.addEventListener('click', () => {
    callPopup.classList.toggle('active');
});

callingButton.addEventListener('click', () => {
    if (!callInput.value) {
        thanksPopup.classList.add('active')
    }
})

// Form
let nameInput = document.querySelector('#name');
let phoneInput = document.querySelector('#phone');
let cityInput = document.querySelector('#city');
let inputs = document.querySelectorAll('.form__content-input__item');
let checkBoxes = document.querySelectorAll('.multy__form-input');
let formButton = document.querySelector('.form__main-button');
let formSubtitles = document.querySelectorAll('.multy__form-subtitle');
let thanksPopup = document.querySelector('.thanks__popup');

formButton.addEventListener('click', () => {
    inputs.forEach(el => {
        el.style.border = '0';
    });

    let isValid = true;

    function setInvalidField(input) {
        input.style.border = '1px solid red';
        isValid = false;
    }

    if (!nameInput.value.trim()) {
        setInvalidField(nameInput);
    }

    if (!phoneInput.value.trim()) {
        setInvalidField(phoneInput);
    }

    if (!cityInput.value.trim()) {
        setInvalidField(cityInput);
    }

    let atLeastOneCheckboxChecked = Array.from(checkBoxes).some(checkbox => checkbox.checked);

    if (atLeastOneCheckboxChecked) {
        formSubtitles.forEach(el => {
            el.classList.remove('red');
        });
    } else {
        formSubtitles.forEach(el => {
            el.classList.add('red');
            isValid = false;
        });
    }

    if (isValid) {
        thanksPopup.classList.add('active');
        inputs.forEach(el => {
            el.value = '';
        });
        checkBoxes.forEach(el => {
            el.checked = false;
        });
    }
});

thanksPopup.addEventListener('click', () => {
    thanksPopup.classList.remove('active');
});
