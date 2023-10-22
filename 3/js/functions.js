/*Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину
и возвращает true, если строка меньше или равна указанной длине,
и false, если строка длиннее.*/

const isLessOrEqual = (string, length) => string.length <= length;

isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.
function isPalindrom (stringToCheck) {
  const newString = stringToCheck.replaceAll(' ', '').toLowerCase();
  return newString === newString.split('').reverse().join('');
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и
возвращает их в виде целого положительного числа. Если в строке
нет ни одной цифры, функция должна вернуть NaN*
Если хотите усложнить задание, предусмотрите случай,
когда вместо строки приходит число. Обратите внимание,
что возвращать функция по-прежнему должна только целые положительные числа
имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
*/


function extractNumber(originalString) {
  const revisedString = originalString.toString();
  let result = '';
  for (let i = 0; i <= revisedString.length; i++) {
    if (!Number.isNaN(parseInt(revisedString[i], 10))) {
      result += revisedString[i];
    }
  }
  return parseInt(result, 10);
}

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
