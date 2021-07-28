// update first class, economy class value & total function
function updateProductChange(isIncrease, product) {
    let classFareNumber = getInputValue(product);
    // classFareNumber = classFareNumber + 1;
    if (isIncrease == true) {
        classFareNumber = classFareNumber + 1;
    }
    if (isIncrease == false && classFareNumber > 0) {
        classFareNumber = classFareNumber - 1;
    }
    document.getElementById('input-' + product).value = classFareNumber;
    //sub total , vat, grand total
    getGrandTotal();
}

//sub total , vat, grand total
function getGrandTotal() {
    const inputFirstNumber = getInputValue('first');
    const inputEconomyNumber = getInputValue('economy');

    const subTotal = (inputFirstNumber * 150) + (inputEconomyNumber * 100);
    document.getElementById('sub-total').innerText = '$' + subTotal;

    //Calculate Vat
    const totalVat = subTotal * .1;
    document.getElementById('calculate-vat').innerText = '$' + totalVat;

    //Calculate Grand Total
    const grandTotal = subTotal + totalVat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

//input value convert to parseInt
function getInputValue(product) {
    const inputProduct = document.getElementById('input-' + product);
    const inputProductNumber = parseInt(inputProduct.value)
    return inputProductNumber;
}


//Book now button click
document.getElementById('book-now').addEventListener('click', function () {
    const inputFirstNumber = getInputValue('first');
    const inputEconomyNumber = getInputValue('economy');

    if (inputFirstNumber > 0 || inputEconomyNumber > 0) {
        const booked = document.getElementById('main-section');
        booked.style.display = 'none'
        document.getElementById('booking-confirm').style.display = 'block'
    }
    else {
        alert('Please book any fare')
    }
})