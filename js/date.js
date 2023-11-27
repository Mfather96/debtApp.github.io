let months = [
    "янв", 
    "фев", 
    "мар", 
    "апр", 
    "май", 
    "июн", 
    "июл", 
    "авг", 
    "сен",
    "окт",
    "ноя",
    "дек",
]

function createNewDate(){
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day} ${months[month]} ${year}`;
}