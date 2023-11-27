document.addEventListener('click', function(event){

    if(event.target == creditAlphaHeader){
        list.classList.toggle('active')
    }
})

addNewSumBtn.addEventListener('click', addNewSum);

addNewDebtBtn.addEventListener('click', createNewDebt)

function createNewPayment(sumValue){
    let listElem = document.createElement('p');
    listElem.classList.add('list-elem');

    let date = document.createElement('span');
    date.classList.add('date-enter');
    date.textContent = createNewDate();

    let sum = document.createElement('span');
    sum.classList.add('sum-enter');
    sum.textContent = `Внесено: ${sumValue}руб`;

    let deleteElem = document.createElement('span');
    deleteElem.classList.add('delete-elem');
    deleteElem.textContent = 'Удалить';
    deleteElem.addEventListener('click', function(){
        createModal();
        let modal = document.querySelector('.modal');
        let modalWrp = document.querySelector('.modal-wrapper');

        let confirm = document.createElement('div');
        confirm.classList.add('confirm-delete');
        confirm.textContent = 'Точно удалить внесенный платеж?';

        let btnsWrp = document.createElement('div')
        btnsWrp.classList.add('buttons-wrapper')

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
        })

        btnsWrp.appendChild(closeBtn);
        btnsWrp.appendChild(acceptBtn);
        modalWrp.appendChild(confirm)
        modalWrp.appendChild(btnsWrp);
    })

    listElem.appendChild(date);
    listElem.appendChild(sum);
    listElem.appendChild(deleteElem);
    list.prepend(listElem)
}

function createNewDebt(){
    createModal();
    let modal = document.querySelector('.modal');
    let modalWrp = document.querySelector('.modal-wrapper');

    let btnsWrp = document.createElement('div')
    btnsWrp.classList.add('buttons-wrapper')

    let closeBtn = document.createElement('div');
    closeBtn.classList.add('secondary', 'button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.addEventListener('click', function(){
        modal.remove();
    })

    let acceptBtn = document.createElement('div');
    acceptBtn.classList.add('default', 'button');
    acceptBtn.textContent = 'Подтвердить';
    acceptBtn.addEventListener('click', function(){
        modal.remove();
    })

    btnsWrp.appendChild(closeBtn);
    btnsWrp.appendChild(acceptBtn);
    modalWrp.appendChild(btnsWrp);
}

function addNewSum(){
    createModal();
    let modal = document.querySelector('.modal');
    let modalWrp = document.querySelector('.modal-wrapper');


    let inputNewSum = document.createElement('input');
    inputNewSum.placeholder = 'Внесенная сумма';
    inputNewSum.classList.add('input-new-sum');
    inputNewSum.type = 'number';

    let btnsWrp = document.createElement('div')
    btnsWrp.classList.add('buttons-wrapper')

    let closeBtn = document.createElement('div');
    closeBtn.classList.add('secondary', 'button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.addEventListener('click', function(){
        modal.remove();
    })

    let acceptBtn = document.createElement('div');
    acceptBtn.classList.add('default', 'button');
    acceptBtn.textContent = 'Подтвердить';
    acceptBtn.addEventListener('click', function(){
        createNewPayment(inputNewSum.value);
        modal.remove();
    })

    btnsWrp.appendChild(closeBtn);
    btnsWrp.appendChild(acceptBtn);
    modalWrp.appendChild(btnsWrp);
    modalWrp.appendChild(inputNewSum);
}

function rewriteTotalDebtSum(){
    totalDebtSumDiv.textContent = TOTAL_DEBT;
}
rewriteTotalDebtSum()