function setToLocalStorage(){
    setTimeout(function(){
        const wrap = JSON.stringify(CONTENT.innerHTML);
        localStorage.setItem('wrapper', wrap);
    },50)
};

function getFromLocalStorage(){
    if(localStorage.length){
        CONTENT.innerHTML = '';
        CONTENT.innerHTML = JSON.parse(localStorage.getItem('wrapper'));
    } else {
        return;
    }
};
