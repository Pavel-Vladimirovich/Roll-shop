
const costDelivery = document.querySelector('[data-delivery-price]');

priceDelivery();

async function priceDelivery () {
    const responce = await fetch('./js/priceDelivery.json');
    const price = await responce.json();
    price.forEach(element => {
        costDelivery.innerHTML = element.delivery;
        console.log(element.delivery);
        return element.delivery
    });
}
