const precios: (number | string)[] = [1, 2, 3, 4, 5, 'hola'];
precios.push(1);
precios.push('1');

//*Tuplas debe respeta el formato que esta entre los corchetes
const user: [string, number, boolean] = ['juanpablo', 31, true];

//*destructurar tuplas
const [username, age] = user;
console.log(username);
console.log(age);
