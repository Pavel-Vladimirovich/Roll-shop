

window.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'minus') {
        let counterWrapper1 = event.target.closest('.counter-wrapper');
        let counter1 = counterWrapper1.querySelector('[data-counter]');
        if (parseInt(counter1.textContent) > 1) {
            counter1.textContent--
        }


    }
    if (event.target.dataset.action === 'plus') {
        let counterWrapper = event.target.closest('.counter-wrapper');
        let counter = counterWrapper.querySelector('[data-counter]');
        counter.textContent++
    }
});