export const emailValidation = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+([.]){1}([a-zA-Z0-9-]+){2,}/;
  return emailRegex.test(email);
};

export const passwordValidation = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.#$@_!%&\-*?])[A-Za-z\d\.#$@_!%&\-*?]{8,30}$/;
  return passwordRegex.test(password);
};
