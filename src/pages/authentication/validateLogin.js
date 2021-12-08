export default function validateInfo(values) {
  let errors = {};

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
