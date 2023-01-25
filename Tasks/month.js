// Get month number


const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const month = (s) => {
  const wordsLength = 3;
  const month = s.toLowerCase().substring(0, wordsLength);
  const monthIndex = Months.indexOf(month);
  return monthIndex !== -1 ? monthIndex + 1 : -1;
};

require('../Tests/month.js')(month);
