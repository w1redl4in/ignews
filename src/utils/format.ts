export const formatCurrency = (money: number) => {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(money / 100);
};
