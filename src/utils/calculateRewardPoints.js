/**
 * Calculates reward points based on the total purchase amount.
 *
 * If the total purchase amount is over $100, the function awards 2 points for each dollar spent
 * over $100, plus an additional 50 points for the first $50.
 *
 * If the total purchase amount is over $50 (but not over $100), the function awards 1 point for
 * each dollar spent over $50.
 *
 * If the total purchase amount is $50 or less, no points are awarded.
 *
 * @param {number} amount - The total purchase amount.
 * @returns {number} The total reward points earned.
 *
 * @example
 * const purchaseAmount = 120.5;
 * const rewardPoints = calculateRewardPoints(purchaseAmount);
 * console.log(`You earned ${rewardPoints} reward points.`);
 */

export const calculateRewardPoints = (amount) => {
  const roundedAmount = Math.round(amount);
  if (roundedAmount > 100) {
    return 2 * (roundedAmount - 100) + 50; // 2 points per dollar over $100 + 50 points between $50 - $100
  } else if (roundedAmount > 50) {
    return roundedAmount - 50; // 1 point per dollar over $50
  } else {
    return 0;
  }
};
