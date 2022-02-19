let question1 = prompt('Автор теории общественного договора как основы концепции антифеодального государства и права, свободного развития личности?');
let  answear = 0;
let result = 'Правильных ответов:'
function showMessage() {
    alert( 'Не правильный ответ' );
  };
  function trueAnswear(){
      ++answear
  }
if (question1 == 'Руссо'){
    trueAnswear();
}else{
     showMessage();
};
let  question2 = prompt('Как датируется «фотиева схизма»?');
if (question2 =='863-867'){
    trueAnswear();
}else{
     showMessage();
};
let question3 = prompt('Кто из перечисленных народов был противником Византии в XI веке?');
if (question3 == 'Венгры'){
    trueAnswear();
}else{
     showMessage();
};
let question4 = prompt('Кто был патриархом Константинополе в 1054 году?');
if (question4 == 'Дмитрий'){
    trueAnswear();
}else{
     showMessage();
};
let question5 = prompt('Из какого города вернулся в Рим в 1377 году папа Григорий XI?');
if (question5 == 'Авиньон'){
    trueAnswear();
}else{
     showMessage();
};
let question6 = prompt('Какое из перечисленных государств Европы не поддержало Урбана VI во время папского раскола?');
if (question6 == 'Франция'){
    trueAnswear();
}else{
     showMessage();
};
let resultTest = result + answear + ' ';
 if( answear <= 2){
    alert(  resultTest +  'Ваш IQ как у чурки')
}else if (answear <= 4){
  alert( resultTest  + 'Ваш IQ как у нигера ')
}else if( answear <=6){
    alert(resultTest + 'Вы гений!!! или обычный белый мужчина')
}else{
    alert( 'Попробуйте еще раз')
};
