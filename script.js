
function handleProduct(product, isIncrease){
    const productInput = document.getElementById(product+'-count');
    const productCount = getInput(product);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount>0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product+'-total').innerText = '$'+ productTotal;
    //call calculateTotal function
    calculateTotal();
}
//total calculation
function calculateTotal(){
    const phoneCount = getInput('phone');
    const caseCount = getInput('case');
    //subtotal
    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText ='$'+ subTotal;
    //tax
    const totalTax = Math.round(subTotal * 0.01);
    document.getElementById('tax-amount').innerText = '$' + totalTax;
    //grand total
    const grandTotal = subTotal + totalTax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
function getInput(product){
    const getProduct  = document.getElementById(product+'-count');
    const productCount = parseInt(getProduct.value);
    return productCount;
}

//remove item
 function removeItem(product){
    const removePhone = document.getElementById(product+'-item');
    document.getElementById(product+'-count').value = 0;
    document.getElementById(product+'-total').innerText = 0;
    removePhone.style.display = 'none';
    calculateTotal();
 }