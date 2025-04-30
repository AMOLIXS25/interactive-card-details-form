const initializeCardHolderNameInputListener = () => {
    const cardHolderNameInput = document.querySelector('#cardholder-name-input');
    cardHolderNameInput.addEventListener('input', (event) => {
        let newCardAuthorFullName = event.target.value;
        updateCardAuthorFullNameText((newCardAuthorFullName).toUpperCase());
        if (isTooNumberOfSpaceInCardAuthorFullNameText(newCardAuthorFullName))
            event.target.value = event.target.value.replace(/ ([^ ]*)$/, '');
    });
}


const initializeCardCvcInputListener = () => {
    const cardCvcInput = document.querySelector('#card-cvc-input');
    cardCvcInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(' ', '');
        let newCardCvc = event.target.value;
        updateCardCvcText(newCardCvc);
    });
}


const initializeCardExpirationDateMonthInputListener = () => {
    const cardExpirationDateMonthInput = document.querySelector('#card-expiration-date-month-input');
    cardExpirationDateMonthInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(' ', '');
        let newCardExpirationDateMonth = event.target.value;
        updateCardExpirationDate(newCardExpirationDateMonth, true);
    });
}


const initializeCardExpirationDateYearInputListener = () => {
    const cardExpirationDateYearInput = document.querySelector('#card-expiration-date-year-input');
    cardExpirationDateYearInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(' ', '');
        let newCardExpirationDateYear = event.target.value;
        updateCardExpirationDate(newCardExpirationDateYear, false);
    })
}


const initializeCardNumberInputListener = () => {
    const cardNumberInput = document.querySelector('#card-number-input');
    cardNumberInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(' ', '');
        event.target.value = addDashesToCardNumber(event.target.value);
        let newCardNumber = event.target.value;

        updateCardNumber(addDashesToCardNumber(newCardNumber));
    });
}


const initializeCompleteButtonListener = () => {
    const confirmButton = document.querySelector('.btn-confirm');
    confirmButton.addEventListener('click', () => {
        const form = document.querySelector('form');
        form.style.display = 'none';
        const completeContainer = document.querySelector('.complete-container');
        completeContainer.style.display = 'flex';
    });
}


const updateCardNumber = (newCardNumber) => {
    const cardNumberText = document.querySelector('.card-number-text');
    const array = newCardNumber.split('-');
    newCardNumber = array.join(' ');
    cardNumberText.textContent = newCardNumber;
}


const addDashesToCardNumber = (newCardNumber) => {
    if (newCardNumber.length === 4) {
        newCardNumber = newCardNumber + '-';
    } else if (newCardNumber.length === 9) {
        newCardNumber = newCardNumber + '-';
    } else if (newCardNumber.length === 14) {
        newCardNumber = newCardNumber + '-';
    } else {
        newCardNumber = newCardNumber;
    }

    return newCardNumber;
}


const updateCardExpirationDate = (newCardExpirationDate, isMonth) => {
    const cardExpirationDateText = document.querySelector(".card-expiration-date");
    const array = cardExpirationDateText.textContent.split('/');
    if (isMonth) {
        if (newCardExpirationDate.length == 1) {
            array[0] = `0${newCardExpirationDate}`;
        } else {
            array[0] = newCardExpirationDate;
        }
    } else {
        if (newCardExpirationDate.length == 1) {
            array[1] = `0${newCardExpirationDate}`;
        } else {
            array[1] = newCardExpirationDate;
        }
    }

    if (array[0] === '') {
        array[0] = '00';
    } 

    if (array[1] === '') {
        array[1] = '00';
    }

    cardExpirationDateText.textContent = array.join('/');

    if (cardExpirationDateText === '') {
        cardCvcText.textContent = '00/00'
    }
}


const updateCardCvcText = (newCardCvc) => {
    const cardCvcText = document.querySelector('.card-cvc-text');
    cardCvcText.textContent = newCardCvc;

    if (newCardCvc === '') {
        cardCvcText.textContent = '000'
    }
}

const updateCardAuthorFullNameText = (newCardAuthorFullName) => {
    const cardAuthorFullNameText = document.querySelector('.card-author-fullname-text');
    cardAuthorFullNameText.textContent = newCardAuthorFullName;

    if (newCardAuthorFullName === '') {
        cardAuthorFullNameText.textContent = 'SHELLY FLEUR';
    }
} 


const isTooNumberOfSpaceInCardAuthorFullNameText = (cardAuthorFullName) => {
    const numberOfSpace = cardAuthorFullName.match(/ /g).length;
    if (numberOfSpace > 1) {
        return true;
    } else {
        return false;
    }
    
}

const main = () => {
    initializeCardHolderNameInputListener();
    initializeCardCvcInputListener();
    initializeCardExpirationDateMonthInputListener();
    initializeCardExpirationDateYearInputListener();
    initializeCardNumberInputListener();
    initializeCompleteButtonListener();
}

main();