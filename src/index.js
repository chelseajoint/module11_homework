//Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, 
//используйте if/else/else if. Попытайтесь не использовать &&.

function largestNumber(a, b, c) {
  let result;
  if(a > b) {
    if(a > c) {
      result = `Наибольшее число ${a}`;
    } else {
      result = `Наибольшее число ${c}`;
    };
  } else if(b > c){
    if(b > a){
      result = `Наибольшее число ${b}`;
    } else {
      result = `Наибольшее число ${a}`;
    };
  } else if(c > a){
    if(c > b){
      result = `Наибольшее число ${c}`;
    } else {
      result = `Наибольшее число ${b}`;
    };
  };
  return result;
};


//Напишите программу, которая запрашивает у пользователя число N и отвечает 
//"Число {N} четное!" или "Число {N} нечетное!"

function evenOddNumber(num){
  if(num % 2 === 0){
    return `Число ${num} четное!`
  } else {
    return `Число ${num} нечетное!`
  };
};

//Напишите функцию getPercents(percent, number),
//которая возвращает {percent} процентов от {number}.

function getPercents(percent, number){
  const result = number / 100 * percent;
  return result;
};

export { largestNumber, evenOddNumber, getPercents };