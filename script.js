
function handleProduct(product, isIncrease){
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
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
    
    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText ='$'+ subTotal;
}
function getInput(product){
    const getProduct  = document.getElementById(product+'-count');
    const productCount = parseInt(getProduct.value);
    return productCount;
}
