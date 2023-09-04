
// Напишите функцию getMonth(n), которая принимает номер месяца 
// и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.

function getMonth (month) {
    if (month == 1) {
    return "January"
    }
    if (month == 2) {
        return "February"
    }
    if (month == 3) {
        return "March"
    } 
    else {
        return "It's not a winter month"
    }
}

module.exports = getMonth;