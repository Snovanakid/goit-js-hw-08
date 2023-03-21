import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input')
}

refs.form.addEventListener('input', throttle(onInputChange, 500))

const inputValues = {
    email: "",
    text: "",
}

setMessagesFromStorage();

function onInputChange(evt) {
    if (evt.target === refs.input) {
        inputValues.email = evt.target.value;
        const valuesObjectString = JSON.stringify(inputValues);
        localStorage.setItem("feedback-form-state", valuesObjectString);
    }
    if (evt.target === refs.textarea) {
        inputValues.text = evt.target.value;
        const valuesObjectString = JSON.stringify(inputValues);
        localStorage.setItem("feedback-form-state", valuesObjectString);
    }
}

function setMessagesFromStorage() {
    const savedMessage = localStorage.getItem("feedback-form-state");
    if (savedMessage) {
        const valuesFromStorage = JSON.parse(savedMessage);
        refs.textarea.value = valuesFromStorage.text;
        refs.input.value = valuesFromStorage.email;
    }
}

refs.form.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    refs.form.reset();
}