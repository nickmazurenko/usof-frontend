const loginFields = [
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
  },
];

const resetPasswordFields = [
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
  },
  {
    labelText: 'Confirm Password',
    labelFor: 'confirm-password',
    id: 'confirmPassword',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Confirm Password',
  },
];
const registerFields = [
  {
    labelText: 'Login',
    labelFor: 'login',
    id: 'login',
    hasSpaces: false,
    type: 'text',
    autoComplete: 'login',
    requiredLength: 5,
    isRequired: true,
    placeholder: 'Login',
  },
  {
    labelText: 'Full Name',
    labelFor: 'full-name',
    id: 'fullName',
    type: 'text',
    requiredLength: 2,
    hasSpaces: true,
    autoComplete: 'fullName',
    isRequired: false,
    placeholder: 'Full Name',
  },
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email',
    hasSpaces: true,
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    hasSpaces: false,
    requiredLength: 6,
    id: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
  },
  {
    labelText: 'Confirm Password',
    labelFor: 'confirm-password',
    hasSpaces: false,
    requiredLength: 6,
    id: 'confirmPassword',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Confirm Password',
  },
];

export { loginFields, registerFields, resetPasswordFields };
