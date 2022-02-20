'use strict'
/*
let num = 3;
 alert(num)
 */

/*
let a = 10;
let b = 2;
alert(a + b);
*/

/*
let c = 15;
let d = 2;
let result = c + d;
alert(result);
*/

/*
let a = 10;
let b = 2;
let c = 5;
alert(a + b + c);
*/

/*
let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c - d;
alert(result);
*/

/*
let str = 'Привет, Мир!';
alert(str);
*/

/*
let name = prompt('Введите ваше имя','');
alert('Ваше имя ' + name);
*/

/*
let number = prompt('Введите ваше число','')
let result = number * number
alert('Квадрат вашего числа равен ' + result)
*/

/*
let str = 'abcde';
alert(str[0] + ' ' +  ' ' + str[1] + ' ' + str[2])
*/

/*
let num = '12345';
alert (num[0] * num[1] * num[2] * num[3] * num[4]);
*/

/*
let hour = 60 * 60;
let day = 24 * hour;
let month = 31 * day;
*/

/*
let hour = 14;
let minute = 34;
let secund = 19;
alert(hour + ':' + minute + ':' + secund);
*/

/*
let number = 12;
let result = number  * number;
alert(result);
*/

/*
let num = 47;
num +=  7;
num -=  18;
num *= 10;
num /=  15;
alert(num);
*/

/*
let num = 10;
++num;
++num;
--num;
alert(num);
*/

/*
let arr = ['Привет, ', 'мир']
let text = arr[0] + arr[1];
alert(text);
*/

/*
let arr = ['Привет, ', 'мир'];
alert(arr);
*/

/*
let arr = ['Привет, ', 'мир'];
alert(arr[0] + arr[1])
*/

/*
let arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);
*/

/*
let arr = ['2', '5', '3', '9'];
let result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);
*/

/*
let obj = {a: 1, b: 2, c: 3};
alert(obj['c']);
*/

/*
let obj = {Коля: '1000', Вася: '500', Петя: '200'};
alert(obj['Петя'] + ' ' + obj['Коля'])
*/

/*
let obj = { 1: 'понедельник' , 2: 'вторник' , 3: 'среда' , 4: 'четверг' , 5: 'пятница'}
let day = 4;
alert(obj[day]);
*/

/*
let obj = { 
'ru' :[1, 2, 3], 
'eu' : [4, 5, 6], 
'ua' : [7,8,9],
}
alert(obj['eu'][0]);
*/

/*
let obj = {
    js:['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}
alert(obj['js'][0]);
*/

/*
let obj = {
    ru: [ 'понедельник' ,  'вторник' ,  'среда' ,  'четверг' ,  'пятница'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'],
};
alert(obj['ru'][0] + ' ' + obj['en'][0]);
*/

/*
let obj = {
    ru: [ 'понедельник' ,  'вторник' ,  'среда' ,  'четверг' ,  'пятница'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'],
};
let lang = 3;
let day = 'ru';
alert(obj[day][lang]);
*/

/*
let a = 1;
if ( a == 0){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let a = 1;
if ( a > 0){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let a = 1;
if ( a < 0){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let a = 1;
if ( a <= 0){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let a = 1;
if ( a !== 0){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let test = 3;
let a = 1;
if ( a == test){
    alert('Верно')
}else{
    alert('Неверно')
}
*/
 
/*
let a = 1;
if ( a === '1'){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let test = true;
if(test){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let test = false;
if(test){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let test = false;
if(test !==  true){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let a = 5;
if( a > 0 && a < 5){
    alert('Верно')
}else{
    alert('Неверно')
}
*/

/*
let a = 2;
if( a == 0 || a == 2){
   alert(a += 2);
}else{
   alert(a /= 10);
}
*/

/*
let b = 3;
let a = 1;
if( a <= 0 && a >= 3){
   alert(a + b);
}else{
   alert(a - b);
}
*/

/*
let a = 1;
let result;
switch(a){
 case '1':
     case '2':
         case '3':
          let  result = 'зима';
           break
           case '4':
             let  result =  'весна';
               break
}
*/

/*
let day = 5;
if( day <= 10 ){
alert('первая декада')
}else if( day <= 20){
    alert('вторая декада')
}else if( day <= 30){
    alert('третья декада')
}else{
 alert('Введите коректное число')
}
*/

/*
let month = 8;
if( month <= 3 ){
    alert('весна')
    }else if( month  > 3 && month <= 6){
        alert('лето')
    }else if( month  > 6 && month <= 9){
        alert('осень')
    }else if( month  > 9 && month <= 12){
        alert('зима')
    }else{
        alert('Введите коректное число')}
        */

/*
let str = 'abcde';
if( str[0] == 'a'){
    alert('да')
}else{
    alert('нет')
}
*/

/*
let str = '12345';
if( str[0] == 1 || str[0] == 2 || str[0] == 3){
    alert('да')
}else{
    alert('нет')
}
*/

/*
let str ='123';
let result = +str[0] + +str[1] + +str[2]
alert(result)
*/

/*
let str = '12345';
let result1 = +str[0] + +str[1] + +str[2];
let result2 =  +str[3] + +str[4] + +str[5];
if(result1 == result2){
    alert('да')
}else{
    alert('нет')
}
*/

/*
let a = 0;
while(a <= 100){
    console.log(a);
    ++a
}
*/

/*
for( let i = 0; i <= 100; ++i){
    console.log(i);
}
*/

/*
let i = 11;
while( i < 33){
    console.log(i);
    ++i
}
*/

/*
for( let i = 11; i < 33; ++i){
    console.log(i);}
*/

/*
for( let i = 0; i < 100; i += 2){
    console.log(i)

}
*/

/*
let sum = 0;
for(let i = 0; i < 100;  i++){
    sum += i;
    console.log(sum); 
}
*/

/*
let arr = [1, 2, 3, 4, 5];
for( let i = 0; i <= 4; i++){
    console.log(arr[i])
}
*/

/*
let result = 0;
let arr = [1, 2, 3, 4, 5];
for( let i = 0; i <= 4; i++){
     result +=arr[i]
    
}
console.log(result)
*/

/*
let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for(let key in obj){
    console.log(obj[key]);
}
*/

/*
let obj = {Коля: '200', Вася: '300', Петя: '400',}
for( let key in obj){
    alert( key + '-' + 'зарплата ' + obj[key] +' долларов')
}
*/

/*
let arr = [2, 5, 9, 15, 0, 4];
for(let i = 0; i < 6; i++ ){
    if( arr[i] > 3 && arr[i] < 10){
        console.log(arr[i])
    }
}
*/

/*
let result = 0;
let arr = [2, -5, 9, -15, 0, -4];
for(let i = 0; i < 6; i++){
    if(arr[i] > 0){
        result += arr[i]
    }
}
console.log(result);
*/

/*
let arr =[1, 2, 5, 9, 4, 13, 4, 10];
for( let i = 0; i < 7; i++){
  if(arr[i] == 4){
       alert('Есть!');
       break;
    }
}
*/

/*
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}
*/

/*
let sum  = '-';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for( let i = 0; i < arr.length; i++){
    sum +=  arr[i] + '-';
}
console.log(sum);
*/

/*
let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write(arr[i] + '<b>' + ' ');
    } else {
        document.write(arr[i] + ' ');
    }
 
}
*/

/*
let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
let day = 4;
for(let i = 0; i < arr.length; i++){
    if( i == day){
        alert('+++++'+arr[i]+'+++++++')
    }
    alert(arr[i])
}
*/

/*
let num = 0;
for( let n = 1000;n >= 50;n /=2){
    num++;
}console.log(num);
*/

/*
let a = 10;
let b = 3;
console.log(a % b);
*/

/*
let a = 10;
let b = 3;
let result = 10 % 3;
if(result == 0){
    console.log('Делится')
}else{
    console.log('Делится с остатком')
}
*/

/*
let st = Math.pow(2,10);
console.log(st);
*/

/*
let num = Math.sqrt(245);
console.log(num);
*/

/*
let result = 0;
let arr =[4, 2, 5, 19, 13, 0, 10];
for(let i = 0; i < arr.length; i++ ){
    result += Math.pow(arr[i],3);
}console.log(Math.sqrt(result));
*/

/*
let num = 379;
num = Math.sqrt(num);
num = Math.round(num);
num = num.toFixed([1]);
num = num.toFixed([2]);
*/

/*
let num = 587;
let ceil =Math.ceil(num;)
let floor =Math.floor(num);
*/

/*
console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))
*/

/*
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));
*/

/*
let arr = [];
for( let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}alert(arr);
*/

/*
let a = 2;
let b = -3;
console.log(Math.abs(a));
console.log(Math.abs(b));
*/

/*
let a = 3;
let b = 5;
let c = (Math.abs(a - b));
console.log(c);
*/

/*
let sum = 0;
let arr = [12, 15, 20, 25, 59, 79];
let arrLenght = +arr.lenght;
for( let i = 0; i < arr.length; i++){
    sum +=arr[i]
}console.log(sum / 6)
*/

/*
let num = 54;
let num2 = 1;
let result = 1;
while( num2 < num ){
    result =  result * num2;
   num2++;
}console.log(result);
*/

/*
let str = 'js';
let str1 = str.toUpperCase();
alert(str1);
*/

/*
let str = 'JS';
let str1 = str.toLowerCase();
alert(str1);
*/

/*/
let str = 'я учу javascript!';
let result = str.length;
console.log(result);
*/

/*
let str = 'я учу javascript!';
let str1 = str.substr(2,4);
let str2 = str.substring(2,5);
let str3 = str.slice(2,5);
console.log(str1)
console.log(str2)
console.log(str3)
*/

/*
let str = 'Я учу Javascript';
console.log(str.indexOf('учу'));
*/

/*
let str = 'я учу javascript!';
let splits = str.split(' ');
console.log(splits);
*/

/*
let str = '2025-12-31';
let str2 = str.split('-');
console.log(str2[2]+'.'+str2[1]+'.'+str2[0]);
*/

/*
let arr = ['я', 'учу', 'javascript', '!'];
let str = arr.join('+');
console.log(str)
*/

/*
let str = 'я учу javascript!';
let str1 = str[0].toUpperCase() + str.slice(1) ;
console.log(str1)
*/

/*
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2)
console.log(result);
*/

/*
let arr1 = [1, 2, 3];
arr1.reverse();
console.log(arr1)
*/

/*
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
arr1.push(4, 5, 6)
console.log(arr1);
arr2.unshift(4, 5, 6);
console.log(arr2);
*/

/*
let arr1 = ['js', 'css', 'jq'];
let arr2 = ['js', 'css', 'jq'];
let elem = arr1.shift();
let elem1 = arr2.pop();
console.log(elem);
console.log(elem1);
*/

/*
let arr1 = [1, 2, 3, 4, 5];
let str = arr1.splice(0 , 3)
console.log(str)
*/

/*
let arr1 = [1, 2, 3, 4, 5];
let str = arr1.splice(3 , 5)
console.log(str)
*/


/*
let arr1 = [1, 2, 3, 4, 5];
let str = arr1.splice(0 , 3);
console.log(str);
*/

/*
let arr1 = [1, 2, 3, 4, 5];
let str = arr1.splice(1 , 3);
console.log(str);
*/

/*
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a', 'b', 'c');
console.log(arr1);
*/

/*
let arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);
*/

/*
let obj = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));
*/