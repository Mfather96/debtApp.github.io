const WRAPPER = document.querySelector('.wrapper')
let creditAlphaContainer = document.querySelector('.credit-alpha-container');
let creditAlphaHeader = document.querySelector('.credit-alpha');
let list = creditAlphaContainer.querySelector('.alpha-list');
let totalDebtSumDiv = document.querySelector('.total-debt-sum');

let addNewSumBtn = list.querySelector('.enter-new-sum');
let addNewDebtBtn = document.querySelector('.add-new-debt');

let TOTAL_DEBT = 0 + ' руб';