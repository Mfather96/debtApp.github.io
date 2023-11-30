let arrCont = [];
function setToLocalStorage(){
    setTimeout(function(){
        const wrap = JSON.stringify(WRAPPER.innerHTML);
        localStorage.setItem('wrapper', wrap);
    },50)
}
function getFromLocalStorage(){
    if(localStorage.length){
        WRAPPER.innerHTML = '';
        WRAPPER.innerHTML = JSON.parse(localStorage.getItem('wrapper'));
        // WRAPPER.appendChild(content)
        console.log(localStorage.getItem('wrapper'));

    }
}
