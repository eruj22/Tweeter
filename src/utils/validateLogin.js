export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.trim().length < 4) {
    errors.name = "Name should be longer than 4 characters";
  } else if (values.name.trim().length > 50) {
    errors.name = "Name should be shorter than 50 characters";
  }

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])/;

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passRegex.test(values.password)) {
    errors.password = "Password should contain at least one uppercase letter";
  }

  return errors;
}
