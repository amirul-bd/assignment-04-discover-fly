//
function updateProductChange(isIncrease, product) {
    const firstClass = document.getElementById('input-' + product)
    let firstClassNumber = parseInt(firstClass.value);
    firstClassNumber = firstClassNumber;
    if (isIncrease == true) {
        firstClassNumber = firstClassNumber + 1;
    }
    if (isIncrease == false && firstClassNumber > 0) {
        firstClassNumber = firstClassNumber - 1;
    }
    document.getElementById('input-' + product).value = firstClassNumber;
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
        document.getElementById('booked-confirm').style.display = 'block'
    }
    else {
        alert('Please book any fare')
    }
})