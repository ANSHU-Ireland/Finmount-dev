// Utility function to create page URLs
export const createPageUrl = (page) => {
  // Remove any query parameters or fragments first
  const [basePage] = page.split('?');
  const [pageWithoutFragment] = basePage.split('#');
  
  // If the page already contains query parameters, preserve them
  if (page.includes('?')) {
    return `/${page}`;
  }
  
  return `/${pageWithoutFragment}`;
};

// Additional utility functions can be added here
export const formatCurrency = (amount, currency = 'EUR') => {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/ & /g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
