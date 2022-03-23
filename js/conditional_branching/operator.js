let age = +prompt('Возраст?');
let accessAllowed = age > 18 ? 'Доступ разрешен' : 'Доступ запрещен';

console.log(accessAllowed);


let age2 = +prompt('Возраст?');
let accessAllowed2;

if(age2 > 18) {
    accessAllowed2 = 'Доступ разрешен';
} else {
    accessAllowed2 = 'Доступ запрещен';
}

console.log(accessAllowed2);