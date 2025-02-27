const disposableDomains = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "throwawaymail.com",
  "yopmail.com",
  "maildrop.cc",
  "mailforspam.com",
  "disposable-email.net",
  "naymedia.net",
]);

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isDisposableEmail = (email) => {
  const domain = email.split("@")[1];
  return disposableDomains.has(domain);
};

const isCatchAllEmail = (email) => {
  const domain = email.split("@")[1];
  return domain==="catchall.com";
};

const validateEmail = (email) => {
  if (!isValidEmail(email)) {
    return { email, status: "invalid" };
  }

  if (isDisposableEmail(email)) {
    return { email, status: "disposable" };
  }

  if (isCatchAllEmail(email)) {
    return { email, status: "catch-all" };
  }

  return { email, status: "valid" };
};

export { validateEmail };
