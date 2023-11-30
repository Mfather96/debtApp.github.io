getFromLocalStorage();
addNewDebtBtn.addEventListener('click', createNewDebtModal);

CONTENT.addEventListener('click', function(event){
    let container = event.target.closest('.container');
    if(!container){
        return;
    }
    let credit = container.querySelector('.credit-line');
    let list = container.querySelector('.credit-list');
    let delBtns = list.querySelectorAll('.delete-elem');
    if(event.target == credit){
        container.classList.toggle('active');
        list.classList.toggle('active');
    }
    for(let addSumBtn of addSumBtns){
        if(event.target == addSumBtn){
                addNewSum(list)
        }
    }
    for(let deleteBtn of delBtns){
        if(event.target == deleteBtn){
            let listElem = deleteBtn.closest('.list-elem');

            createModal();
            let modal = document.querySelector('.modal');
            let modalWrp = document.querySelector('.modal-wrapper');

            let confirm = createDOMelement('div', 'confirm-delete');
            confirm.textContent = 'Точно удалить внесенный платеж?';

            let btnsWrp = createDOMelement('div', 'buttons-wrapper')

            let closeBtn = document.createElement('div');
            closeBtn.classList.add('secondary', 'button');
            closeBtn.textContent = 'Нет';
            closeBtn.addEventListener('click', function(){
                modal.remove();
            })

            let acceptBtn = document.createElement('div');
            acceptBtn.classList.add('default', 'button');
            acceptBtn.textContent = 'Да';
            acceptBtn.addEventListener('click', function(){
                listElem.remove();
                modal.remove();
                rewriteBankDebt();
                rewriteTotalDebtSum();
                setToLocalStorage();
            })

            btnsWrp.appendChild(closeBtn);
            btnsWrp.appendChild(acceptBtn);
            modalWrp.appendChild(confirm)
            modalWrp.appendChild(btnsWrp);
        }
    }
})
