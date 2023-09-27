/**
 * Checks if a given date (in milliseconds) is within a specified number of months back from the current date.
 *
 * @param {number} dateInMilliseconds - The date to check in milliseconds.
 * @param {number} monthsBack - The number of months to check back.
 * @returns {boolean} true if the date is within the specified months back, otherwise false.
 */

export function isWithinMonthsBack(dateInMilliseconds, monthsBack) {
  const currentDate = new Date();

  const monthsAgo = new Date();
  monthsAgo.setMonth(currentDate.getMonth() - monthsBack);

  const inputDate = new Date(dateInMilliseconds);
  return inputDate >= monthsAgo && inputDate <= currentDate;
}
