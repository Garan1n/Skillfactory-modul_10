let myObject = new Map();
myObject.set("name","Kola");
myObject.set("age", 29);
myObject.set(true, "boolean");
for(let [key, value] of myObject) {
console.log(`Ключ - ${key}, Значение - ${value}`)
}


let myObjeсt = new Map([
    ['name', 'Petr'],
    ['age', 167],
    ["vampire", true]
    ]);
    for(let [key, value] of myObjeсt) {
    console.log(`Ключ - ${key}, Значение - ${value}`)
    } // Обьект как массив
    