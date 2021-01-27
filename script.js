

document.getElementById('phone-increase').addEventListener('click', function(){
    handleProduct(true);
})
document.getElementById('phone-decrease').addEventListener('click', function(){
    handleProduct(false);
 })
function handleProduct(isIncrease){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(isIncrease == true){
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrease == false && phoneCount>0){
        phoneNewCount = phoneCount - 1;
    }

    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$'+ phoneTotal;
}















document.getElementById('case-increase').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;

    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + caseTotal;
})
//decrease value for phone and phone case



document.getElementById('case-decrease').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + caseTotal;
})