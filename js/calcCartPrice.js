
function calcCartPrice() {
	const {priceForFree, price} = state.infoForDelivery;

	//находим все блоки в корзине
	const cartItems = document.querySelectorAll('.cart-item');
	//выводим сумму результата в поле "итого"
	const totalPrice = document.querySelector('.total-price');
	//выводим плашку бесплатно после определенной суммы в корзине
	const bageDelivery = document.querySelector('[data-delivery-badge]');
	//выводим информацию о стоимости доставки
	const costDelivery = document.querySelector('.delivery-cost');
	const freeDelivery = document.querySelector('[data-delivery-price]');
	freeDelivery.innerHTML = priceForFree.toFixed(2);
	
	let totalPriceEl = 0;

	cartItems.forEach(item => {
		const amountEl = item.querySelector('[data-counter]').innerText;
		const priceEl = item.querySelector('.price__currency').innerText;
		const currentPrice = parseFloat(amountEl) * parseFloat(priceEl);
		totalPriceEl += currentPrice;
	});

	totalPrice.innerText = totalPriceEl.toFixed(2);

	if (totalPriceEl) {
		bageDelivery.classList.remove('none');
	} else {
		bageDelivery.classList.add('none');
	}
	
	
	if(totalPriceEl > priceForFree){
		costDelivery.innerText = 'Бесплатно';
		costDelivery.classList.add('free');
	}else{
		costDelivery.innerText = price.toFixed(2);
		costDelivery.classList.remove('free');
	}
}
