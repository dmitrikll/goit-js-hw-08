import throttle from "lodash.throttle";

const feedbackFormData = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let memoryText = {};

addUserData();

feedbackFormData.addEventListener('input', throttle(onTextInput, 500));
feedbackFormData.addEventListener('submit', onFormSubmit);

function onTextInput(event) {
    memoryText = localStorage.getItem(STORAGE_KEY);
    memoryText = JSON.parse(memoryText) || {};
    memoryText[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryText));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log(memoryText);
    localStorage.removeItem(STORAGE_KEY);
};

function addUserData() {
    const saveText = localStorage.getItem(STORAGE_KEY);
    if (saveText) {
        const parsSaveText = JSON.parse(saveText)
        Object.entries(parsSaveText).forEach(([name, value]) => {
            feedbackFormData.elements[name].value = value;
        });
    };
};