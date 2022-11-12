



getForPriceDelivery();

async function getForPriceDelivery() {
    const responce = await fetch('./js/priceDelivery.json');
    const info = await responce.json();

    state.setInfoForDelivery(info);
}

