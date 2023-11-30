getFromLocalStorage();
addNewDebtBtn.addEventListener('click', createNewDebtModal);

CONTENT.addEventListener('click', function(event){
    let container = event.target.closest('.container');
    if(!container){
        return;
    }
    let credit = container.querySelector('.credit-line');
    let list = container.querySelector('.credit-list');
    if(event.target == credit){
        container.classList.toggle('active');
        list.classList.toggle('active');
    }
    for(let addSumBtn of addSumBtns){
        if(event.target == addSumBtn){
                addNewSum(list)
        }
    }
})
