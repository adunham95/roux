export function formatAsDollars(cents: number) {
  const dollars = cents / 100;
  if (typeof Intl !== 'undefined' && typeof Intl.NumberFormat === 'function') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(dollars);
  } else {
    return '$' + dollars.toFixed(2);
  }
}
