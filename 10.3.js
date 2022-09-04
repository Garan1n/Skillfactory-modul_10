let a = +prompt("Введите Ваш возраст")
if (Number.isNaN(a)) {
    console.log('Упс, вы ошиблись')
} else if (typeof a === 'number') {
    if (a % 2=== 0 ) {
    console.log("Четное число")
} else {
    console.log('Не четное число')
}
}