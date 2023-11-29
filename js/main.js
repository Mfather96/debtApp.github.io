
// addNewSumBtn.addEventListener('click', addNewSum);

addNewDebtBtn.addEventListener('click', createNewDebtModal)

function createNewPayment(sumValue, listAppend){
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
    listAppend.prepend(listElem)
}

function createNewDebtModal(){
    createModal();
    let modal = document.querySelector('.modal');
    let modalWrp = document.querySelector('.modal-wrapper');

    let inputBank = document.createElement('input');
    inputBank.classList.add('input-bank');
    inputBank.placeholder = 'Введите название банка';

    let inputDebt = document.createElement('input');
    inputDebt.classList.add('input-debt');
    inputDebt.placeholder = 'Введите сумму долга';

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
        addNewDebt(inputBank.value, inputDebt.value);
        modal.remove();
    })

    modalWrp.appendChild(inputBank);
    modalWrp.appendChild(inputDebt);
    btnsWrp.appendChild(closeBtn);
    btnsWrp.appendChild(acceptBtn);
    modalWrp.appendChild(btnsWrp);
}

function addNewSum(listContainer){
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
        createNewPayment(inputNewSum.value, listContainer);
        modal.remove();
    })

    btnsWrp.appendChild(closeBtn);
    btnsWrp.appendChild(acceptBtn);
    modalWrp.appendChild(btnsWrp);
    modalWrp.appendChild(inputNewSum);
}

function addNewDebt(titleName, total){
    let container = createDOMelement('div', 'container');
    container.classList.add('credit-alpha-container');

    let creditWrp = createDOMelement('div', 'credit-alpha');
        let title = createDOMelement('div', 'alpha-title');
        title.textContent = titleName;
        let totalDebt = createDOMelement('div', 'total-debt');
        totalDebt.textContent = `Долг: ${total}руб`;

    let list = createDOMelement('div', 'alpha-list');
    let newSum = createDOMelement('div', 'enter-new-sum');
    newSum.textContent = 'Внести новую сумму';

    list.appendChild(newSum);
    creditWrp.appendChild(title);
    creditWrp.appendChild(totalDebt);
    container.appendChild(creditWrp);
    container.appendChild(list);
    WRAPPER.appendChild(container);
}
// function rewriteTotalDebtSum(){
//     totalDebtSumDiv.textContent = TOTAL_DEBT;
// }
// rewriteTotalDebtSum()

function createDOMelement(selector, className){
    let domElem = document.createElement(selector);
    domElem.classList.add(className);
    return domElem;
}

WRAPPER.addEventListener('click', function(event){
    let container = event.target.closest('.container');
    if(container){
        let list = container.querySelector('.alpha-list');
        let addNewSumBtn = list.querySelector('.enter-new-sum')
        list.classList.toggle('active');
        addNewSumBtn.addEventListener('click', function(){
            addNewSum(list)
        })
    }
})
