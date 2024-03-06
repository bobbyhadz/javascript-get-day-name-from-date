// EXAMPLE 1 - Get the Day Name from a specific Date using JavaScript

function getDayName(date = new Date(), locale = 'en-US') {
  return date.toLocaleDateString(locale, {weekday: 'long'});
}

// ✅ Get name of current day
console.log(getDayName()); // 👉️ Tuesday

// ✅ Get day name for specific date
console.log(getDayName(new Date('2022-01-29'))); // 👉️ Saturday

// ✅ Get day name in different locale // 👇️ Samstag
console.log(getDayName(new Date('2022-01-29'), 'de-DE'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Passing a string to the Date constructor before calling the function

// function getDayName(date = new Date(), locale = 'en-US') {
//   return date.toLocaleDateString(locale, {weekday: 'long'});
// }

// const dateStr = '2022-04-29';

// // 👇️ "Friday"
// console.log(getDayName(new Date(dateStr)));

// // 👇️ "Freitag"
// console.log(getDayName(new Date(dateStr), 'de-DE'));
