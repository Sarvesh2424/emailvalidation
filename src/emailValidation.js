const disposableDomains = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "throwawaymail.com",
]);

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isDisposableEmail = (email) => {
  const domain = email.split("@")[1];
  return disposableDomains.has(domain);
};

const validateEmail = (email) => {
  if (!isValidEmail(email)) {
    return { email, status: "invalid" };
  }
  
  if (isDisposableEmail(email)) {
    return { email, status: "disposable" };
  }

  return { email, status: "valid" };
};

export { validateEmail };