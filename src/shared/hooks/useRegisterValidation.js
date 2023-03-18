import { useState } from 'react';

function useRegisterValidation() {
  const requiredErrorMessage = '*';
  const [emailError, _setEmailError] = useState(null);
  const [passwordError, _setPasswordError] = useState(null);
  const [confirmationPasswordError, _setConfirmationPasswordError] = useState(null);
  const [usernameError, _setUsernameError] = useState(null);
  const [localEmailError, _setLocalEmailError] = useState(requiredErrorMessage);
  const [localPasswordError, _setLocalPasswordError] = useState(requiredErrorMessage);
  const [localConfirmationPasswordError, _setLocalConfirmationPasswordError] = useState(requiredErrorMessage);
  const [localUsernameError, _setLocalUsernameError] = useState(requiredErrorMessage);
  const [email, _setEmail] = useState('');
  const [password, _setPassword] = useState('');
  const [confirmationPassword, _setConfirmationPassword] = useState('');
  const [username, _setUsername] = useState('');
  const [passwordReliability, _setPasswordReliability] = useState([0, 0, 0]);

  const increasePasswordReliability = index => {
    _setPasswordReliability(state => {
      state[index] = 1;
      return state;
    });
  };

  const decreasePasswordReliability = index => {
    _setPasswordReliability(state => {
      state[index] = 0;
      return state;
    });
  };

  const comparePasswords = (pass, confirmPass) => {
    if (pass === confirmPass) {
      _setLocalConfirmationPasswordError('');
    } else {
      _setLocalConfirmationPasswordError('Passwords do not match');
    }
  };

  const setConfirmationPassword = value => {
    const normalizedValue = value.trim();
    comparePasswords(password, normalizedValue);
    _setConfirmationPassword(normalizedValue);
  };

  const setPassword = value => {
    const normalizedValue = value.trim();

    if (/(?=.*[a-z])/.test(normalizedValue)) {
      increasePasswordReliability(0);
    } else {
      decreasePasswordReliability(0);
    }

    if (/(?=.*[0-9])/.test(normalizedValue)) {
      increasePasswordReliability(1);
    } else {
      decreasePasswordReliability(1);
    }

    if (/(?=.*[A-Z])/.test(normalizedValue)) {
      increasePasswordReliability(2);
    } else {
      decreasePasswordReliability(2);
    }

    if (normalizedValue.length < 6 || normalizedValue.length > 12) {
      _setLocalPasswordError('Password must contain 6 to 12 characters');
      _setPasswordReliability([0, 0, 0]);
    } else {
      _setLocalPasswordError(null);
    }

    comparePasswords(normalizedValue, confirmationPassword);
    _setPassword(normalizedValue);
  };

  const setEmail = value => {
    const normalizedValue = value.trim();

    const re = /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/;

    if (!re.test(normalizedValue)) {
      _setLocalEmailError('Invalid email');
    } else {
      _setLocalEmailError(null);
    }

    _setEmail(normalizedValue);
  };

  const setUsername = value => {
    const normalizedValue = value.trim();

    if (!normalizedValue.length) {
      _setLocalUsernameError(requiredErrorMessage);
    } else {
      _setLocalUsernameError(null);
    }

    _setUsername(normalizedValue);
  };

  const validate = () => {
    _setEmailError(localEmailError);
    _setPasswordError(localPasswordError);
    _setConfirmationPasswordError(localConfirmationPasswordError);
    _setUsernameError(localUsernameError);

    if (localEmailError || localPasswordError || localConfirmationPasswordError || localUsernameError) {
      return false;
    } else {
      return true;
    }
  };

  return {
    email,
    password,
    confirmationPassword,
    username,
    emailError,
    passwordError,
    confirmationPasswordError,
    usernameError,
    localEmailError,
    localPasswordError,
    localConfirmationPasswordError,
    localUsernameError,
    passwordReliability,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setUsername,
    validate,
  };
}

export default useRegisterValidation;