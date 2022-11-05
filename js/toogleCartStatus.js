
function toogleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const dataCart = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    if (cartWrapper.children.length) {
        dataCart.classList.add('none');
        orderForm.classList.remove('none');

    } else {
        dataCart.classList.remove('none');
        orderForm.classList.add('none');
    }
} 