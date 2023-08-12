function productHandler(product, isIncrease) {
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;

    if (isIncrease == true) {
        newProductCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        newProductCount = productCount - 1;
    }

    productInput.value = newProductCount;
    let productTotal;
    if (product == 'laptop') {
        productTotal = newProductCount * 245000;
    }
    else{
        productTotal = newProductCount * 176999;
    }
    document.getElementById(product+'-total').innerText = productTotal;
    handleCheckout();
}

function getItems(product) {
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function handleCheckout() {
    const laptopCount = getItems('laptop');
    const phoneCount = getItems('phone');

    const totalPrice = parseInt(laptopCount) * 245000 + parseInt(phoneCount) * 176999;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}
function checkOut() {
    alert("Thanks for purchasing with us!")
    location.reload();
}