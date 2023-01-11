import throttle from 'lodash.throttle';

const formKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formData = {};
// let json = localStorage.getItem(formKey);
// let parsed = JSON.parse(json);

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
defaultForm();

function onFormSubmit(e) {
    e.preventDefault();
    
  console.log(JSON.parse(localStorage.getItem(formKey)));
  e.target.reset();
  localStorage.removeItem(formKey);
}

function onFormInput(e) {
    //  console.log(e.target.name);
    //  console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
}

function defaultForm() {
    if (localStorage.getItem(formKey)) {
    const locStor = JSON.parse(localStorage.getItem(formKey));
    for (const key in locStor) {
      //   console.log(key);
      //   console.log(locStor[key]);
      formData[key] = locStor[key];
      form.elements[key].value = locStor[key];
    }
  }
}


//   json = localStorage.getItem(formKey);
//   parsed = JSON.parse(json);
//   console.log(parsed)
//   if(parsed){
//   input.value = parsed.email || '';
//   textarea.value = parsed.message || '';
//  }
// }
  
