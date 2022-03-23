let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if(year == 2015) {
    alert( 'Вы правы!' );
}


// if (year == 2015) {
//     alert( "Правильно!" );
//     alert( "Вы такой умный!" );
// }

// ELSE

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year == 2015) {
//     alert( 'Да вы знаток!' );
// } else {
//     alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }


// ELSE IF

// let year = +prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//     alert( 'Это слишком рано...' );
// } else if (year > 2015 && year < 2020) {
//     alert( 'Это поздновато' );
// } else if (year > 2020) {
//     alert( 'нет не правильно - чуть меньше' );
// }  else if(isNaN(year)) {
//     alert('Пшел вон!')
// } else {
//     alert( 'Верно!' );
// }


// let numOrStr = +prompt('input number or string');
//
// if(isNaN(numOrStr)) {
//     alert('str was added')
// } else {
//     alert('number');
// }
// console.log(+numOrStr, typeof +numOrStr)