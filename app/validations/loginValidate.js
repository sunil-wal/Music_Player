function loginValidation(event) {
  let data = {};
  if (event.username.length === 0) {
    data = {
      ...data,
      error: 'Username/Email is required'
    };
  } else if (event.password.length === 0) {
    data = {
      ...data,
      error: 'Password is required'
    };
  } else if (event.password.length < 4) {
    data = {
      ...data,
      error: 'Password should not be less than length of 4'
    };
  } else if (event.username.length > 0) {
    data = {
      ...data,
      error: ''
    };
  } else if (event.password.length > 5) {
    data = {
      ...data,
      error: ''
    };
  }
  return data;
}

export default loginValidation;
