

window.addEventListener('click', function (event) {

    let counter;// блочная видимость, поэтому объявляем за фигурными скобками

    // проверяем элемент по которому кликнули
    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus'){
        
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.textContent) > 1) {
            counter.textContent--
            
        }else if((event.target.closest('.cart-wrapper') && parseInt(counter.textContent) === 1)){
            //удаляем товар из корзины
            event.target.closest('.cart-item').remove();
            
            //проверяем наличие товаров в корзине
            toogleCartStatus();
            //подсчитываем общую стоимость в козине
            calcCartPrice();
        }
    }
    if (event.target.dataset.action === 'plus') {
        counter.textContent++
    }
    //подсчитываем общую стоимость в козине
    if(event.target.closest('.cart-wrapper') && event.target.hasAttribute('data-action')){
        calcCartPrice();
    }
});