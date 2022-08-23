let value = 0;

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');

/**
 * @type {HTMLInputElement|null}
 */

const input = document.querySelector('input[type="text"]');

function displayValue() {
    if (input != null) {
        input.value = String(value);
    }
}

minus?.addEventListener('click', function handleMinusClick() {
    value = value - 1;
    displayValue();
});

plus?.addEventListener('click', function handlePlusClick() {
    value = value + 1;
    displayValue();
})

displayValue();