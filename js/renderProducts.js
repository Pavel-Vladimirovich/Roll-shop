
const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
    const responce = await fetch('./js/products.json');
    const productsArray = await responce.json();
    renderProducts(productsArray);
}


function renderProducts(products) {
    products.forEach(element => {
        const productsHTML = `
                    <div class="col-md-6">
						<div class="card mb-4" data-id="${element.id}">
							<img class="product-img" src="img/roll/${element.imgSrc}" alt="jpg">
							<div class="card-body text-center">
								<h4 class="item-title">${element.title}</h4>
								<p><small class="card-text text-secondary" data-items-in-box>${element.itemsInBox} шт.</small></p>
								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<div class="price">
										<div class="price__weight text-secondary"><small>${element.weight} гр.</small></div>
										<div class="price__currency">${element.price} руб.</div>
									</div>
								</div>
								<button data-cart href="#" class="btn btn-outline-dark btn-block">добавить в
									корзину</button>
							</div>

						</div>
					</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productsHTML);
    });
}

