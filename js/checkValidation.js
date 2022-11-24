const orderForm = document.querySelector('#order-form');

const formControl = orderForm.querySelector('.form-control');

const btnControl = orderForm.querySelector('.btn-control');

function createElementError(text) {
    document.querySelectorAll('.error').forEach(elem => {
        elem.remove();
    });

    const element = document.createElement('div');
    element.className = 'error'
    element.style.marginTop = '20px'
    element.style.color = '#EB5A1E'
    element.style.textAlign = 'center'
    element.style.fontWeight = '700'
    element.innerHTML = text
    return element;
}

orderForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!formControl.value) {
        orderForm.appendChild(createElementError('Поле для ввода <br/> не должно быть пустым'));
        formControl.classList.add('_error');
    } else if(formControl.value.length !== 9) {
        orderForm.appendChild(createElementError('Ваш номер должен состоять из 9 цифр'));
    }
});

