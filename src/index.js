//Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, 
//используйте if/else/else if. Попытайтесь не использовать &&.

export function largestNumber(a, b, c) {
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

export function evenOddNumber(num){
  if(num % 2 === 0){
    return `Число ${num} четное!`
  } else {
    return `Число ${num} нечетное!`
  };
};