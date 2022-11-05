
function calcCartPrice() {
	//находим все блоки в корзине
	const cartItems = document.querySelectorAll('.cart-item');
	//выводим сумму результата в поле "итого"
	const totalPrice = document.querySelector('.total-price');
	//выводим плашку бесплатно после определенной суммы в корзине
	const deliveryCost = document.querySelector('[data-delivery-badge]');
	
	let totalPriceEl = 0;

	cartItems.forEach(item => {

		const amountEl = item.querySelector('[data-counter]').innerText;
		const priceEl = item.querySelector('.price__currency').innerText;
		const currentPrice = parseFloat(amountEl) * parseFloat(priceEl);
		totalPriceEl += currentPrice;

	});

	totalPrice.innerText = totalPriceEl.toFixed(2);

	if (totalPriceEl) {
		deliveryCost.classList.remove('none');
	} else {
		deliveryCost.classList.add('none');
	}

	if(totalPriceEl > 14.90){
		document.querySelector('.delivery-cost').innerText = 'Бесплатно';
		document.querySelector('.delivery-cost').classList.add('free');
	}else{
		document.querySelector('.delivery-cost').innerText = '5.90';
		document.querySelector('.delivery-cost').classList.remove('free');
	}

}
