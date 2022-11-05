const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {

	if (event.target.hasAttribute('data-cart')) {

		//находим родителя с классом 'card'
		const card = event.target.closest('.card');

		const productInfo = {
			id: card.dataset.id,
			imSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}

		//поверяем есть товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		//если есть, то увеличиваем количество
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

		} else {
			const cartItemHTML = `
				<div class="cart-item" data-id="${productInfo.id}">
					<div class="cart-item__top">
						<div class="cart-item__img">
							<img src=${productInfo.imSrc} alt=${productInfo.title}> 
						</div>
						<div class="cart-item__desc">
							<div class="cart-item__title">${productInfo.title}</div>
							<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

							<div class="cart-item__details">

								<div class="items items--small counter-wrapper">
									<div class="items__control" data-action="minus">-</div>
									<div class="items__current" data-counter="">${productInfo.counter}</div>
									<div class="items__control" data-action="plus">+</div>
								</div>

								<div class="price">
									<div class="price__currency">${productInfo.price}</div>
								</div>

							</div>

						</div>
					</div>
				</div>`

			// добавляет HTML в указанную область
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}
		
		card.querySelector('[data-counter]').innerText = '1';

		//проверяем наличие товаров в корзине
		toogleCartStatus();
		
		//подсчет стоимости товаров в корзине
		calcCartPrice();

	}
})