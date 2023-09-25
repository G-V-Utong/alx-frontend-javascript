export default function iterateThroughObject(reportWithIterator) {
  const iterator = reportWithIterator;

  let result = '';
  let firstEmployee = true;

  for (const employee of iterator) {
    if (!firstEmployee) {
      result += '|';
    } else {
      firstEmployee = false;
    }
    result += employee;
  }

  return result;
}
