
const contactForm = () => {

    const content = document.querySelector('#content');
    const contentPage = document.createElement('div');

    //create form, inputs and labels.
    const form = document.createElement('form');
    const label__name = document.createElement('label')
    const input__name = document.createElement('input');
    const label__apellido = document.createElement('label')
    const input__apellido = document.createElement('input');
    const label__correo = document.createElement('label')
    const input__correo = document.createElement('input');
    const sendButton = document.createElement('button');

    //seting classes and ids
    contentPage.classList.add('content-page')
    form.classList.add('contact-form');
    label__name.setAttribute('for', 'name');
    input__name.setAttribute('id', 'name');
    label__apellido.setAttribute('for', 'apellido');
    input__apellido.setAttribute('id', 'apellido');
    label__correo.setAttribute('for', 'correo');
    input__correo.setAttribute('id', 'correo');
    input__correo.setAttribute('type', 'email');
    sendButton.setAttribute('id', 'send-button');

    //setting content
    label__name.textContent = 'Nombre';
    label__apellido.textContent = 'Apellido';
    label__correo.textContent = 'Correo';
    sendButton.textContent = 'Send'

    //Append
    form.append(label__name, input__name, label__apellido, input__apellido, label__correo, input__correo, sendButton);
    contentPage.append(form);
    content.append(contentPage);
};

export default contactForm;